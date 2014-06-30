#!/usr/bin/env python3

import os, sys
import glob
import pprint
import logging
import textwrap
import collections
import pkg_resources

from tornado import ioloop, httpserver
from tailon import argparse
from tailon.server import Application, Commands
from tailon import version


# setup logging
log = logging.getLogger('logtail')
ch = logging.StreamHandler()
ft = logging.Formatter('[+%(relativeCreated)f][%(levelname)5s] %(message)s')

ch.setFormatter(ft)
ch.setLevel(logging.DEBUG)

log.setLevel(logging.INFO)
log.addHandler(ch)
log.propagate = 0

# tornado access logging
weblog = logging.getLogger('tornado.access')
weblog.addHandler(ch)
weblog.setLevel(logging.WARN)
weblog.propagate = 0

# tornado application logging
applog = logging.getLogger('tornado.application')
applog.addHandler(ch)
applog.setLevel(logging.WARN)
applog.propagate = 0


def parseaddr(arg):
    tmp = arg.split(':')
    port = int(tmp[-1])
    addr = ''.join(tmp[:-1])
    addr = '' if addr == '*' else addr
    return port, addr

def parseconfig(cfg):
    import yaml

    raw_config = yaml.load(cfg)

    port, addr = parseaddr(raw_config.get('bind', 'localhost:8080'))
    config = {
        'port': port,
        'addr': addr,
        'debug': raw_config.get('debug', False),
        'commands': raw_config.get('commands', ['tail', 'grep', 'awk']),
        'allow-transfers': raw_config.get('allow-transfers', False),
        'relative-root':   raw_config.get('relative-root', '/'),
    }

    if 'files' not in raw_config or not len(raw_config['files']):
        raise Exception('missing or empty "files" config entry')

    files = config['files'] = collections.OrderedDict()
    files['__ungrouped__'] = []

    def helper(el, group='__ungrouped__', indict=False):
        for i in el:
            if isinstance(i, dict):
                if indict:
                    raise Exception('more than two sub-levels under "files"')
                name, j = list(i.items())[0]
                helper(j, name, True)
                continue
            for fn in glob.glob(i):
                if not os.access(fn, os.R_OK):
                    log.info('skipping unreadable file: %s', fn)
                    continue
                d = files.setdefault(group, [])
                d.append(fn)

    helper(raw_config['files'])
    return config

def parseopts(args=None):
    description = '''
    Tailon is a web app for looking at and searching through log files.
    '''

    epilog = '''
    Example config file:
      bind: 0.0.0.0:8080      # address and port to bind on
      allow-transfers: true   # allow log file downloads
      relative-root: /tailon  # web app root path (default: '')
      commands: [tail, grep]  # allowed commands

      files:
        - '/var/log/messages'
        - '/var/log/nginx/*.log'
        - '/var/log/xorg.[0-10].log'
        - 'cron':             # it's possible to add sub-sections
            - '/var/log/cron*'

    Example command-lines:
      tailon -f /var/log/messages /var/log/debug -m tail
      tailon -f '/var/log/cron*' -a -b localhost:8080
      tailon -c config.yaml -d
    '''

    p = argparse.ArgumentParser(formatter_class=CompactHelpFormatter,
                                description=textwrap.dedent(description),
                                epilog=textwrap.dedent(epilog),
                                add_help=False)

    group = p.add_argument_group('Required arguments')
    arg = group.add_argument
    arg('-c', '--config', type=argparse.FileType('r'), metavar='path', help='yaml config file')
    arg('-f', '--files', metavar='path', nargs='+', help='list of files or file wildcards to expose')

    group = p.add_argument_group('Optional arguments')
    arg = group.add_argument
    arg('-h', '--help', action='help', help='show this help message and exit')
    arg('-d', '--debug', action='store_true', help='show debug messages')
    arg('-v', '--version', action='version', version='tailon version %s' % version)
    arg('-b', '--bind', metavar='addr:port', help='listen on the specified address and port')
    arg('-r', '--relative-root', metavar='path', default='', help='web app root path')
    arg('-a', '--allow-transfers', action='store_true', help='allow log file downloads')
    arg('-m', '--commands', nargs='*', choices=Commands.names, metavar='cmd',
        default=['tail', 'grep', 'awk'], help='allowed commands (default: tail grep awk)')

    return p, p.parse_args(args)

def main_config(opts):
    if opts.config:
        config = parseconfig(opts.config)
    else:
        port, addr = parseaddr(opts.bind if opts.bind else 'localhost:8080')
        config = {
            'port': port,
            'addr': addr,
            'files': {'__ungrouped__':[]},
            'commands': opts.commands,
            'allow-transfers': opts.allow_transfers,
            'relative-root': opts.__dict__.get('relative_root', ''),
            'debug': opts.__dict__.get('debug', False),
        }

        for fn in opts.files:
            for fn in glob.glob(fn):
                if not os.access(fn, os.R_OK):
                    log.info('skipping unreadable file: %s', fn)
                    continue
                if fn.startswith('./'):
                    fn = fn.lstrip('./')
                config['files']['__ungrouped__'].append(fn)

    return config

def main(argv=sys.argv):
    parser, opts = parseopts()

    if not opts.config and not opts.files:
        parser.print_help()
        print('\nError: must specify files on the command line or through a config file')
        sys.exit(1)

    if opts.debug:
        log.setLevel(logging.DEBUG)
        applog.setLevel(logging.DEBUG)
        weblog.setLevel(logging.DEBUG)

    try:
        template_dir = pkg_resources.resource_filename('tailon', '../templates')
        assets_dir = pkg_resources.resource_filename('tailon', '../assets')
    except ImportError:
        template_dir, assets_dir = None, None

    config = main_config(opts)

    application = Application(config, {}, template_dir, assets_dir)
    server = httpserver.HTTPServer(application)
    server.listen(config['port'], config['addr'])

    lines = []
    for group, files in config['files'].items():
        group = group if group != '__ungrouped__' else 'ungrouped'
        lines.append('%s:' % group)
        for fn in files: lines.append(fn)
    log.debug('Config:\n%s', pprint.pformat(config))
    log.debug('Files:\n%s', '\n - '.join(lines))

    loop = ioloop.IOLoop.instance()
    msg = 'Listening on %s:%s' % (config['addr'], config['port'])
    loop.add_callback(log.info, msg)
    loop.start()

class CompactHelpFormatter(argparse.RawTextHelpFormatter):
    def __init__(self, *args, **kw):
        super(CompactHelpFormatter, self).__init__(*args, max_help_position=35, **kw)

    def _format_usage(self, *args, **kw):
        usage = super(CompactHelpFormatter, self)._format_usage(*args, **kw)
        return usage.capitalize()

    def _format_action_invocation(self, action):
        if not action.option_strings:
            default = self._get_default_metavar_for_positional(action)
            metavar, = self._metavar_formatter(action, default)(1)
            return metavar
        else:
            res = ', '.join(action.option_strings)
            default = self._get_default_metavar_for_optional(action)
            args_string = self._format_args(action, default)
            res = '%s %s' % (res, args_string)
            return res


if __name__ == '__main__':
    main()
