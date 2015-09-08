# -*- coding: utf-8; -*-

import os
import logging

from functools import partial
from os.path import dirname, getsize, getmtime, join as pjoin
from subprocess import PIPE

from tornado import web, ioloop
from tornado.escape import json_encode, json_decode
from tornado.process import Subprocess
from sockjs.tornado import SockJSRouter, SockJSConnection

STREAM = Subprocess.STREAM
log = logging.getLogger('logtail')
io_loop = ioloop.IOLoop.instance()


#-----------------------------------------------------------------------------
class Commands:
    names = 'awk', 'sed', 'grep', 'tail'

    def __init__(self, grep='grep', awk='gawk', tail='tail', sed='sed',
                 powershell='powershell.exe'):
        self.grepexe = grep
        self.awkexe = awk
        self.tailexe = tail
        self.sedexe = sed
        self.powershellexe = powershell

    # @todo: Factor out common logic.
    def awk(self, script, fn, stdout, stderr, **kw):
        cmd = [self.awkexe, '--sandbox', script]
        if fn:
            cmd.append(fn)
        p = Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running awk %s, pid: %s', cmd, p.proc.pid)
        return p

    def grep(self, regex, fn, stdout, stderr, **kw):
        cmd = [self.grepexe, '--text', '--line-buffered', '--color=never', '-e', regex]
        if fn:
            cmd.append(fn)
        p = Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running grep %s, pid: %s', cmd, p.proc.pid)
        return p

    def sed(self, script, fn, stdout, stderr, **kw):
        cmd = [self.sedexe, '-u', '-e', script]
        if fn:
            cmd.append(fn)
        p = Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running sed %s, pid: %s', cmd, p.proc.pid)
        return p

    def tail_unix(self, n, fn, stdout, stderr, **kw):
        cmd = [self.tailexe, '-n', str(n), '-f', fn]
        p = Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running tail %s, pid: %s', cmd, p.proc.pid)
        return p

    def tail_powershell(self, n, fn, stdout, stderr, **kw):
        cmd = [self.tailexe, '-n', str(n), '-f', fn]
        p = Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running tail %s, pid: %s', cmd, p.proc.pid)
        return p

    # @todo: Choose tail implementation dependencing on platform.
    tail = tail_unix

    def tail_awk(self, n, fn, script, stdout, stderr):
        tail = self.tail(n, fn, stdout=PIPE, stderr=STREAM)
        awk = self.awk(script, None, stdout=STREAM, stderr=STREAM, stdin=tail.stdout)
        return tail, awk

    def tail_grep(self, n, fn, regex, stdout, stderr):
        tail = self.tail(n, fn, stdout=PIPE, stderr=STREAM)
        grep = self.grep(regex, None, stdout=STREAM, stderr=STREAM, stdin=tail.stdout)
        tail.stdout.close()
        return tail, grep

    def tail_sed(self, n, fn, script, stdout, stderr):
        tail = self.tail(n, fn, stdout=PIPE, stderr=STREAM)
        sed = self.sed(script, None, stdout=STREAM, stderr=STREAM, stdin=tail.stdout)
        tail.stdout.close()
        return tail, sed


#-----------------------------------------------------------------------------
class BaseHandler(web.RequestHandler):
    def __init__(self, *args, **kw):
        super(BaseHandler, self).__init__(*args, **kw)
        self.config = self.application.config
        self.client_config = self.application.client_config


class Index(BaseHandler):
    def get(self):
        files = self.config['files']
        files = {name: Files.statfiles(lst) for name, lst in files.items()}
        root = self.config['relative-root']

        ctx = {
            'root':  root,
            'files': files,
            'commands': self.config['commands'],
            'client_config': json_encode(self.client_config),
        }

        self.render('index.html', **ctx)


class Files(BaseHandler):
    @staticmethod
    def statfiles(files):
        for fn in files:
            if not os.access(fn, os.R_OK):
                continue
            yield fn, getsize(fn), getmtime(fn)

    def get(self):
        # @todo: Use this instead of the template.
        files = self.config['files']['__ungrouped__']
        files = Files.statfiles(files)
        res = {'files': list(files)}
        self.set_header('Content-Type', 'application/json')
        self.write(json_encode(res))


class Fetch(BaseHandler):
    def error(self, code, msg):
        self.set_header('Content-Type', 'text/html')
        self.set_status(500)

        html = (
            '<html>'
            '<title>{code:d}: {message}</title>'
            '<body><tt>{code:d}: {message}</tt></body>'
            '</html>'
        )
        self.finish(html.format(code=code, message=msg))

    def get(self, path):
        if not self.config['allow-transfers']:
            self.error(500, 'transfers not allowed')
            return

        all_files = {i for values in self.config['files'].values() for i in values}
        if path not in all_files:
            self.error(404, 'file not found')
            return

        # basename = os.path.basename(path)
        # self.set_header('Content-Disposition', 'attachment; filename="%s"' % path+'asdf');
        self.set_header('Content-Type', 'text/plain')
        with open(path) as fh:
            self.write(fh.read())  # todo: stream


class WebsocketCommands(SockJSConnection):
    def __init__(self, *args, **kw):
        super(WebsocketCommands, self).__init__(*args, **kw)

        self.config = self.application.config
        self.cmd = Commands()
        self.connected = True
        self.tail = None
        self.grep = None
        self.awk = None
        self.sed = None

    def stdout_callback(self, fn, stream, data):
        # log.debug('stdout: %s\n', data.decode('utf8'))
        if not self.connected:
            return

        msg = {fn: data.decode('utf8').splitlines(True)}
        self.wjson(msg)

    def stderr_callback(self, fn, stream, data):
        # log.debug('stderr: %s', data)
        if not self.connected:
            return

        text = data.decode('utf8')

        if text.endswith(': file truncated\n'):
            text = 'truncated'
        else:
            text = text.splitlines()

        msg = {'fn': fn, 'err': text}
        self.wjson(msg)

    def killall(self):
        for i in 'tail', 'awk', 'grep', 'sed':
            var = getattr(self, i)
            if var:
                log.debug('killing %s process: %s', i, var.pid)
                var.stdout.close()
                var.stderr.close()
                var.proc.kill()
                var = None

    def file_exists(self, fn):
        all_files = {i for values in self.config['files'].values() for i in values}
        return fn in all_files

    def on_message(self, message):
        msg = json_decode(message)
        cmds = self.config['commands']
        log.debug('received message: %s', msg)

        self.killall()

        if 'tail' in msg and 'tail' in cmds:
            fn = msg['tail']

            if self.file_exists(fn):
                n = msg.get('tail-lines', 10)
                self.tail = self.cmd.tail(n, fn, STREAM, STREAM)

                outcb = partial(self.stdout_callback, fn, self.tail.stdout)
                errcb = partial(self.stderr_callback, fn, self.tail.stderr)
                self.tail.stdout.read_until_close(outcb, outcb)
                self.tail.stderr.read_until_close(errcb, errcb)

        elif 'grep' in msg and 'grep' in cmds:
            fn = msg['grep']
            if self.file_exists(fn):
                n = msg.get('tail-lines', 10)
                regex = msg.get('script', '.*')

                # self.tail, self.grep = self.cmd.tail_grep2(n, fn, regex)
                self.tail, self.grep = self.cmd.tail_grep(n, fn, regex, STREAM, STREAM)

                outcb = partial(self.stdout_callback, fn, self.grep.stdout)
                errcb = partial(self.stderr_callback, fn, self.grep.stderr)
                # self.tail.stderr.read_until_close(errcb, errcb)
                self.grep.stdout.read_until_close(outcb, outcb)
                self.grep.stderr.read_until_close(errcb, errcb)

        elif 'awk' in msg and 'awk' in cmds:
            fn = msg['awk']
            if self.file_exists(fn):
                n = msg.get('tail-lines', 10)
                script = msg.get('script', '{print $0}')

                self.tail, self.awk = self.cmd.tail_awk(n, fn, script, STREAM, STREAM)

                outcb = partial(self.stdout_callback, fn, self.awk.stdout)
                errcb = partial(self.stderr_callback, fn, self.awk.stderr)
                # self.tail.stderr.read_until_close(errcb, errcb)
                self.awk.stdout.read_until_close(outcb, outcb)
                self.awk.stderr.read_until_close(errcb, errcb)

        elif 'sed' in msg and 'sed' in cmds:
            fn = msg['sed']
            if self.file_exists(fn):
                n = msg.get('tail-lines', 10)
                script = msg.get('script', 's|.*|&|')

                self.tail, self.sed = self.cmd.tail_sed(n, fn, script, STREAM, STREAM)

                outcb = partial(self.stdout_callback, fn, self.sed.stdout)
                errcb = partial(self.stderr_callback, fn, self.sed.stderr)
                # self.tail.stderr.read_until_close(errcb, errcb)
                self.sed.stdout.read_until_close(outcb, outcb)
                self.sed.stderr.read_until_close(errcb, errcb)

    def on_close(self):
        self.killall()
        self.connected = False
        log.debug('connection closed')

    def wjson(self, data):
        return self.send(json_encode(data))


#-----------------------------------------------------------------------------
class Application(web.Application):
    here = dirname(__file__)

    def __init__(self, config, client_config={}, template_dir=None, assets_dir=None):
        prefix = config['relative-root']
        wsroutes = SockJSRouter(WebsocketCommands, pjoin('/', prefix, 'ws'))
        WebsocketCommands.application = self

        routes = [
            [r'/assets/(.*)', web.StaticFileHandler, {'path': pjoin(self.here, 'assets/')}],
            [r'/files', Files],  # @todo: Not used.
            [r'/fetch/(.*)', Fetch],
            [r'/', Index],
        ]

        # Tornado is pretentious about routes being a list of tuples.
        for n, route in enumerate(routes):
            route[0] = pjoin('/', prefix, route[0].lstrip('/'))
            routes[n] = tuple(route)

        routes += wsroutes.urls

        # import pprint
        # log.debug('routes:\n%s', pprint.pformat(routes))

        if not template_dir:
            pjoin(self.here, 'tailon/templates')

        if not assets_dir:
            pjoin(self.here, 'talon/assets')

        log.debug('template dir: %s', template_dir)
        log.debug('static dir: %s', assets_dir)

        settings = {
            'static_path': assets_dir,
            'template_path': template_dir,
            'debug': config['debug'],
        }

        super(Application, self).__init__(routes, **settings)
        self.config = config
        self.client_config = client_config
