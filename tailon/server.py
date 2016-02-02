# -*- coding: utf-8; -*-

import os
import json
import logging
import subprocess

from functools import partial

from tornado import web, ioloop, process, escape
from sockjs.tornado import SockJSRouter, SockJSConnection


STREAM = process.Subprocess.STREAM
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
        p = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running awk %s, pid: %s', cmd, p.proc.pid)
        return p

    def grep(self, regex, fn, stdout, stderr, **kw):
        cmd = [self.grepexe, '--text', '--line-buffered', '--color=never', '-e', regex]
        if fn:
            cmd.append(fn)
        p = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running grep %s, pid: %s', cmd, p.proc.pid)
        return p

    def sed(self, script, fn, stdout, stderr, **kw):
        cmd = [self.sedexe, '-u', '-e', script]
        if fn:
            cmd.append(fn)
        p = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running sed %s, pid: %s', cmd, p.proc.pid)
        return p

    def tail_unix(self, n, fn, stdout, stderr, **kw):
        cmd = [self.tailexe, '-n', str(n), '-f', fn]
        p = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running tail %s, pid: %s', cmd, p.proc.pid)
        return p

    def tail_powershell(self, n, fn, stdout, stderr, **kw):
        cmd = [self.tailexe, '-n', str(n), '-f', fn]
        p = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running tail %s, pid: %s', cmd, p.proc.pid)
        return p

    # @todo: Choose tail implementation dependencing on platform.
    tail = tail_unix

    def tail_awk(self, n, fn, script, stdout, stderr):
        tail = self.tail(n, fn, stdout=subprocess.PIPE, stderr=STREAM)
        awk = self.awk(script, None, stdout=STREAM, stderr=STREAM, stdin=tail.stdout)
        return tail, awk

    def tail_grep(self, n, fn, regex, stdout, stderr):
        tail = self.tail(n, fn, stdout=subprocess.PIPE, stderr=STREAM)
        grep = self.grep(regex, None, stdout=STREAM, stderr=STREAM, stdin=tail.stdout)
        tail.stdout.close()
        return tail, grep

    def tail_sed(self, n, fn, script, stdout, stderr):
        tail = self.tail(n, fn, stdout=subprocess.PIPE, stderr=STREAM)
        sed = self.sed(script, None, stdout=STREAM, stderr=STREAM, stdin=tail.stdout)
        tail.stdout.close()
        return tail, sed


#-----------------------------------------------------------------------------
class BaseHandler(web.RequestHandler):
    def __init__(self, *args, **kw):
        super(BaseHandler, self).__init__(*args, **kw)
        self.config = self.application.config
        self.client_config = self.application.client_config
        self.file_lister = self.application.file_lister


class Index(BaseHandler):
    def get(self):
        ctx = {
            'root': self.config['relative-root'],
            'commands': self.config['commands'],
            'client_config': escape.json_encode(self.client_config),
        }

        self.render('index.html', **ctx)


class Files(BaseHandler):
    def get(self):
        self.file_lister.refresh()
        self.set_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.set_header('Content-Type', 'application/json')
        self.write(escape.json_encode(self.file_lister.files))


class Fetch(BaseHandler, web.StaticFileHandler):
    def should_return_304(self):
        pass

    def set_etag_header(self):
        pass

    def validate_absolute_path(self, root, absolute_path):
        if not self.config['allow-transfers']:
            raise web.HTTPError(403, 'transfers not allowed')

        if not self.file_lister.is_path_allowed(absolute_path):
            raise web.HTTPError(404)

        absolute_path = super(Fetch, self).validate_absolute_path(root, absolute_path)
        return absolute_path


class WebsocketCommands(SockJSConnection):
    def __init__(self, *args, **kw):
        super(WebsocketCommands, self).__init__(*args, **kw)

        self.config = self.application.config
        self.file_lister = self.application.file_lister
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

        msg_data = []
        split_data = data.decode('utf8').splitlines(True);

        if self.config['json-pretty-print'] is True:
            for line in split_data:
                try:
                    # Json pretty print
                    [msg_data.append(item) for item in json.dumps(json.loads(line), indent=4, ensure_ascii=False).splitlines(True)]
                except ValueError as e:
                    # If line is not json format
                    msg_data.append(line)
        else:
            msg_data = split_data

        msg = {fn: msg_data}
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
        for i in ('tail', 'awk', 'grep', 'sed'):
            var = getattr(self, i)
            if var:
                log.debug('killing %s process: %s', i, var.pid)
                var.stdout.close()
                var.stderr.close()
                var.proc.kill()
                var = None

    def on_message(self, message):
        command = escape.json_decode(message)
        allowed_commands = self.config['commands']
        log.debug('received message: %r', command)

        if not set(command.keys()) <= {'mode', 'path', 'tail-lines', 'script'}:
            log.warn('invalid message received: %r', command)
            return

        if command['mode'] not in allowed_commands:
            log.warn('disallowed command: %r', command['mode'])
            return

        path = command['path']
        if not self.file_lister.is_path_allowed(path):
            log.warn('request to unlisted file: %r', path)
            return

        self.killall()

        if 'tail' == command['mode']:
            n = command.get('tail-lines', 10)
            self.tail = self.cmd.tail(n, path, STREAM, STREAM)

            outcb = partial(self.stdout_callback, path, self.tail.stdout)
            errcb = partial(self.stderr_callback, path, self.tail.stderr)
            self.tail.stdout.read_until_close(outcb, outcb)
            self.tail.stderr.read_until_close(errcb, errcb)

        elif 'grep' == command['mode']:
            n = command.get('tail-lines', 10)
            regex = command.get('script', '.*')

            self.tail, self.grep = self.cmd.tail_grep(n, path, regex, STREAM, STREAM)

            outcb = partial(self.stdout_callback, path, self.grep.stdout)
            errcb = partial(self.stderr_callback, path, self.grep.stderr)
            self.grep.stdout.read_until_close(outcb, outcb)
            self.grep.stderr.read_until_close(errcb, errcb)

        elif 'awk' in command['mode']:
            n = command.get('tail-lines', 10)
            script = command.get('script', '{print $0}')

            self.tail, self.awk = self.cmd.tail_awk(n, path, script, STREAM, STREAM)

            outcb = partial(self.stdout_callback, path, self.awk.stdout)
            errcb = partial(self.stderr_callback, path, self.awk.stderr)
            self.awk.stdout.read_until_close(outcb, outcb)
            self.awk.stderr.read_until_close(errcb, errcb)

        elif 'sed' == command['mode']:
            n = command.get('tail-lines', 10)
            script = command.get('script', 's|.*|&|')

            self.tail, self.sed = self.cmd.tail_sed(n, path, script, STREAM, STREAM)

            outcb = partial(self.stdout_callback, path, self.sed.stdout)
            errcb = partial(self.stderr_callback, path, self.sed.stderr)
            self.sed.stdout.read_until_close(outcb, outcb)
            self.sed.stderr.read_until_close(errcb, errcb)

    def on_close(self):
        self.killall()
        self.connected = False
        log.debug('connection closed')

    def wjson(self, data):
        return self.send(escape.json_encode(data))


#-----------------------------------------------------------------------------
class Application(web.Application):
    here = os.path.dirname(__file__)

    def __init__(self, config, client_config, file_lister, template_dir=None, assets_dir=None):
        prefix = config['relative-root']
        wsroutes = SockJSRouter(WebsocketCommands, os.path.join('/', prefix, 'ws'))
        WebsocketCommands.application = self

        routes = [
            [r'/assets/(.*)', web.StaticFileHandler, {'path': os.path.join(self.here, 'assets/')}],
            [r'/files', Files],
            [r'/fetch/(.*)', Fetch, {'path': '/'}],
            [r'/', Index],
        ]

        # Tornado is pretentious about routes being a list of tuples.
        for n, route in enumerate(routes):
            route[0] = os.path.join('/', prefix, route[0].lstrip('/'))
            routes[n] = tuple(route)

        routes += wsroutes.urls

        if not template_dir:
            os.path.join(self.here, 'tailon/templates')

        if not assets_dir:
            os.path.join(self.here, 'talon/assets')

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
        self.file_lister = file_lister
