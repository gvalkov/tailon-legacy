# -*- coding: utf-8; -*-

import os
import logging
from functools import partial
from datetime import datetime

import sockjs.tornado
from tornado import web, ioloop, process, escape
from tornado_http_auth import BasicAuthMixin, DigestAuthMixin

from . import utils


STREAM = process.Subprocess.STREAM
log = logging.getLogger('tailon')
io_loop = ioloop.IOLoop.instance()


#-----------------------------------------------------------------------------
class BaseHandler(web.RequestHandler):
    def __init__(self, *args, **kw):
        super(BaseHandler, self).__init__(*args, **kw)
        self.config = self.application.config
        self.client_config = self.application.client_config

    # Will be aliased to prepare() if authentication is enabled (see setup_routes()).
    def _prepare(self):
        self.get_authenticated_user(self.config['users'].get, realm='Protected')


class Index(BaseHandler):
    def initialize(self, template):
        self.template = template

    def get(self):
        ctx = {
            'root': self.config['relative-root'],
            'client_config': escape.json_encode(self.client_config),
        }

        self.render(self.template, **ctx)


class Files(BaseHandler):
    def get(self, check=None):
        self.application.file_lister.refresh()
        self.set_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.set_header('Content-Type', 'application/json')

        if check:
            message = self.application.file_lister.has_changed
        else:
            message = self.application.file_lister.files
        self.write(escape.json_encode(message))


class NonCachingStaticFileHandler(web.StaticFileHandler):
    def set_extra_headers(self, path):
        self.set_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')


class Fetch(BaseHandler, web.StaticFileHandler):
    def should_return_304(self):
        pass

    def set_etag_header(self):
        pass

    @classmethod
    def get_absolute_path(cls, root, path):
        if path.startswith('/'):
            abspath = os.path.abspath(path)
        else:
            abspath = os.path.abspath(os.path.join(os.curdir, path))
        return abspath

    def validate_absolute_path(self, root, absolute_path):
        if not self.config['allow-transfers']:
            raise web.HTTPError(403, 'transfers not allowed')

        if not self.application.file_lister.is_path_allowed(absolute_path):
            raise web.HTTPError(404)

        absolute_path = super(Fetch, self).validate_absolute_path(root, absolute_path)
        return absolute_path


class WebsocketTailon(sockjs.tornado.SockJSConnection):
    def __init__(self, *args, **kw):
        super(WebsocketTailon, self).__init__(*args, **kw)

        self.config = self.application.config
        self.file_lister = self.application.file_lister
        self.cmd_control = self.application.cmd_control
        self.initial_tail_lines = self.config['tail-lines']

        self.last_stdout_line = []
        self.last_stderr_line = []

        self.processes = {
            'tail': None,
            'grep': None,
            'awk': None,
            'sed': None
        }

    def on_open(self, info):
        self.connected = True

    def stdout_callback(self, path, stream, data):
        # log.debug('stdout: %s\n', data.decode('utf8'))
        if not self.connected:
            return

        data = data.decode('utf8', errors='replace')
        lines = data.splitlines(True)

        if not lines:
            return

        lines = utils.line_buffer(lines, self.last_stdout_line)
        self.write_json(lines)

    def stderr_callback(self, path, stream, data):
        # log.debug('stderr: %s', data)
        if not self.connected:
            return

        data = data.decode('utf8', errors='replace')
        lines = data.splitlines(True)

        if not lines:
            return

        lines = utils.line_buffer(lines, self.last_stderr_line)

        if not lines:
            return

        if lines[-1].endswith(': file truncated\n'):
            lines[-1] = ['%s - %s - truncated' % (datetime.now(), path)]

        msg = {'err': lines}
        self.write_json(msg)

    def killall(self):
        for name in self.processes:
            proc = self.processes[name]
            if not proc:
                continue

            log.debug('killing %s process: %s', name, proc.pid)
            proc.stdout.close()
            proc.stderr.close()
            proc.proc.kill()
            proc.proc.wait()
            proc.proc = None
            self.processes[name] = None

    def on_message(self, message):
        command = escape.json_decode(message)
        allowed_commands = self.config['commands']
        log.debug('received message: %r', command)

        if not set(command.keys()) <= {'command', 'path', 'tail-lines', 'script'}:
            log.warn('invalid message received: %r', command)
            return

        if command['command'] not in allowed_commands:
            log.warn('disallowed or unsupported command: %r', command['command'])
            return

        path = os.path.abspath(command['path'])
        if not self.file_lister.is_path_allowed(path):
            log.warn('request to unlisted file: %r', path)
            return

        self.killall()

        if 'tail' == command['command']:
            n = command.get('tail-lines', self.initial_tail_lines)
            proc = self.cmd_control.tail(n, path, STREAM, STREAM)
            self.processes['tail'] = proc

            outcb = partial(self.stdout_callback, path, proc.stdout)
            errcb = partial(self.stderr_callback, path, proc.stderr)
            proc.stdout.read_until_close(outcb, outcb)
            proc.stderr.read_until_close(errcb, errcb)

        elif 'grep' == command['command']:
            n = command.get('tail-lines', self.initial_tail_lines)
            regex = command.get('script', '.*')

            proc_tail, proc_grep = self.cmd_control.tail_grep(n, path, regex, STREAM, STREAM)
            self.processes['tail'], self.processes['grep'] = proc_tail, proc_grep

            outcb = partial(self.stdout_callback, path, proc_grep.stdout)
            errcb = partial(self.stderr_callback, path, proc_grep.stderr)
            proc_grep.stdout.read_until_close(outcb, outcb)
            proc_grep.stderr.read_until_close(errcb, errcb)

        elif 'awk' in command['command']:
            n = command.get('tail-lines', self.initial_tail_lines)
            script = command.get('script', '{print $0}')

            proc_tail, proc_awk = self.cmd_control.tail_awk(n, path, script, STREAM, STREAM)
            self.processes['tail'], self.processes['awk'] = proc_tail, proc_awk

            outcb = partial(self.stdout_callback, path, proc_awk.stdout)
            errcb = partial(self.stderr_callback, path, proc_awk.stderr)
            proc_awk.stdout.read_until_close(outcb, outcb)
            proc_awk.stderr.read_until_close(errcb, errcb)

        elif 'sed' == command['command']:
            n = command.get('tail-lines', self.initial_tail_lines)
            script = command.get('script', 's|.*|&|')

            proc_tail, proc_sed = self.cmd_control.tail_sed(n, path, script, STREAM, STREAM)
            self.processes['tail'], self.processes['sed'] = proc_tail, proc_sed

            outcb = partial(self.stdout_callback, path, proc_sed.stdout)
            errcb = partial(self.stderr_callback, path, proc_sed.stderr)
            proc_sed.stdout.read_until_close(outcb, outcb)
            proc_sed.stderr.read_until_close(errcb, errcb)

    def on_close(self):
        self.killall()
        self.connected = False
        log.debug('connection closed')

    def write_json(self, data):
        return self.send(escape.json_encode(data))


class BaseApplication(web.Application):
    here = os.path.dirname(__file__)

    def __init__(self, config, client_config, template_dir=None, assets_dir=None):
        self.relative_root = config['relative-root']
        self.config = config
        self.client_config = client_config

        if not template_dir:
            template_dir = os.path.join(self.here, 'templates')

        if not assets_dir:
            assets_dir = os.path.join(self.here, 'assets')

        log.debug('template dir: %s', template_dir)
        log.debug('static dir: %s', assets_dir)

        routes, self.ws_handler = self.setup_routes()

        # Tornado wants routes to be a list of tuples.
        for n, route in enumerate(routes):
            if isinstance(routes[n], tuple):
                continue
            route[0] = os.path.join('/', self.relative_root, route[0].lstrip('/'))
            routes[n] = tuple(route)

        settings = {
            'static_path': assets_dir,
            'template_path': template_dir,
            'debug': config['debug'],
        }

        super(BaseApplication, self).__init__(routes, **settings)


#-----------------------------------------------------------------------------
class TailonApplication(BaseApplication):
    def __init__(self, *args, **kw):
        self.file_lister = kw.pop('file_lister')
        self.cmd_control = kw.pop('cmd_control')
        super(TailonApplication, self).__init__(*args, **kw)

    def enable_authentication(self, auth_type):
        mixin = {'digest':  DigestAuthMixin, 'basic': BasicAuthMixin}[auth_type]
        BaseHandler.__bases__ = (web.RequestHandler, mixin)
        BaseHandler.prepare = BaseHandler._prepare

    def setup_routes(self):
        if self.config['http-auth']:
            self.enable_authentication(self.config['http-auth'])

        routes = [
            [r'/assets/(.*)', NonCachingStaticFileHandler, {'path': os.path.join(self.here, 'assets/')}],
            [r'/files(/check)?', Files],
            [r'/fetch/(.*)', Fetch, {'path': '/'}],
            [r'/', Index, {'template': 'tailon.html'}],
        ]

        WebsocketTailon.application = self
        ws_handler = sockjs.tornado.SockJSRouter(WebsocketTailon, os.path.join('/', self.relative_root, 'ws'))
        routes += ws_handler.urls
        return routes, ws_handler
