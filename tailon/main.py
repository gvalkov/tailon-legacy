#!/usr/bin/env python3
# -*- coding: utf-8; -*-

from __future__ import print_function
from __future__ import absolute_import

import os, sys
import glob
import pprint
import logging
import textwrap
import collections
import pkg_resources

from tornado import ioloop, httpserver

from . import commands
from . import argparse
from . import __version__
from . import server
from . import utils


#-----------------------------------------------------------------------------
# Setup Logging
#-----------------------------------------------------------------------------
log = logging.getLogger()
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

def enable_debugging():
    log.setLevel(logging.DEBUG)
    applog.setLevel(logging.DEBUG)
    weblog.setLevel(logging.DEBUG)


#-----------------------------------------------------------------------------
def parseconfig(cfg):
    import yaml

    raw_config = yaml.load(cfg)

    port, addr = utils.parseaddr(raw_config.get('bind', 'localhost:8080'))
    config = {
        'port': port,
        'addr': addr,
        'debug': raw_config.get('debug', False),
        'commands': raw_config.get('commands', ['tail', 'grep', 'awk']),
        'allow-transfers': raw_config.get('allow-transfers', False),
        'follow-names':    raw_config.get('follow-names', False),
        'relative-root':   raw_config.get('relative-root', '/'),
        'http-auth':       raw_config.get('http-auth', False),
        'users':           raw_config.get('users', {}),
        'wrap-lines':      raw_config.get('wrap-lines', True),
        'tail-lines':      raw_config.get('tail-lines', 10)
    }

    if 'files' not in raw_config or not len(raw_config['files']):
        raise Exception('missing or empty "files" config entry')

    files = config['files'] = collections.OrderedDict()
    files['__ungrouped__'] = []

    def helper(el, group='__ungrouped__', indict=False):
        for paths_or_group in el:
            if isinstance(paths_or_group, dict):
                if indict:
                    raise RuntimeError('more than two sub-levels under "files"')
                group_name, j = list(paths_or_group.items())[0]
                helper(j, group_name, True)
                continue
            for path in glob.glob(paths_or_group):
                if not os.access(path, os.R_OK):
                    log.info('skipping unreadable file: %r', path)
                    continue
                d = files.setdefault(group, [])
                d.append(path)

    helper(raw_config['files'])
    return config


#-----------------------------------------------------------------------------
# Option parsing
#-----------------------------------------------------------------------------
def parseopts(args=None):
    description = '''
    Tailon is a web app for looking at and searching through log files.
    '''

    epilog = '''
    Example config file:
      bind: 0.0.0.0:8080      # address and port to bind on
      allow-transfers: true   # allow log file downloads
      follow-names: false     # allow tailing of not-yet-existent files
      relative-root: /tailon  # web app root path (default: '')
      commands: [tail, grep]  # allowed commands
      tail-lines: 10          # number of lines to tail initially
      wrap-lines: true        # initial line-wrapping state

      files:
        - '/var/log/messages'
        - '/var/log/nginx/*.log'
        - '/var/log/xorg.[0-10].log'
        - '/var/log/nginx/'   # all files in this directory
        - 'cron':             # it's possible to add sub-sections
            - '/var/log/cron*'

      http-auth: basic        # enable authentication (optional)
      users:                  # password access (optional)
        user1: pass1

    Example command-line:
      tailon -f /var/log/messages /var/log/debug -m tail
      tailon -f '/var/log/cron*' -a -b localhost:8080
      tailon -f /var/log/ -p basic -u user1:pass1 -u user2:pass2
      tailon -c config.yaml -d
    '''

    parser = argparse.ArgumentParser(
        formatter_class=utils.CompactHelpFormatter,
        description=textwrap.dedent(description),
        epilog=textwrap.dedent(epilog),
        add_help=False
    )

    #-------------------------------------------------------------------------
    group = parser.add_argument_group('Required options')
    arg = group.add_argument
    arg('-c', '--config', type=argparse.FileType('r'),
        metavar='path', help='yaml config file')

    arg('-f', '--files', nargs='+', metavar='path',
        help='list of files or file wildcards to expose')

    #-------------------------------------------------------------------------
    group = parser.add_argument_group('General options')
    arg = group.add_argument
    arg('-h', '--help', action='help', help='show this help message and exit')
    arg('-d', '--debug', action='store_true', help='show debug messages')
    arg('-v', '--version', action='version', version='tailon version %s' % __version__)

    arg('--output-encoding', dest='output_encoding', metavar='enc',
        help="encoding for output")

    arg('--input-encoding', dest='input_encoding', default='utf8', metavar='enc',
        help='encoding for input and output (default utf8)')

    #-------------------------------------------------------------------------
    group = parser.add_argument_group('Server options')
    arg = group.add_argument
    arg('-b', '--bind', metavar='addr:port', help='listen on the specified address and port')
    arg('-r', '--relative-root', metavar='path', default='', help='web app root path')
    arg('-p', '--http-auth', metavar='type', choices=['basic', 'digest'],
        help='enable http authentication (digest or basic)')
    arg('-u', '--user', metavar='user:pass', action='append', dest='users', default=[],
        help='http authentication username and password')
    arg('-a', '--allow-transfers', action='store_true',  help='allow log file downloads')
    arg('-F', '--follow-names', action='store_true', help='allow tailing of not-yet-existent files')

    arg('-t', '--tail-lines', default=10, type=int, metavar='num',
        help='number of lines to tail initially')

    arg('-m', '--commands', nargs='*', metavar='cmd',
        choices=commands.ToolPaths.command_names, default=['tail', 'grep', 'awk'],
        help='allowed commands (default: tail grep awk)')

    #-------------------------------------------------------------------------
    group = parser.add_argument_group('User-interface options')
    arg = group.add_argument
    arg('--no-wrap-lines', dest='wrap-lines', action='store_false',
        help='initial line-wrapping state (default: true)')

    return parser, parser.parse_args(args)


def setup(opts):
    if opts.config:
        config = parseconfig(opts.config)
        return config

    port, addr = utils.parseaddr(opts.bind if opts.bind else 'localhost:8080')
    config = {
        'port': port,
        'addr': addr,
        'files': {'__ungrouped__': []},
        'commands': opts.commands,
        'allow-transfers': opts.allow_transfers,
        'http-auth': opts.__dict__.get('http_auth', False),
        'users': dict((i.split(':') for i in opts.users)),
        'follow-names': opts.follow_names,
        'relative-root': opts.__dict__.get('relative_root', ''),
        'debug': opts.__dict__.get('debug', False),
        'tail-lines': opts.__dict__.get('tail_lines', 10),
        'wrap-lines': opts.__dict__.get('wrap-lines', True),
    }

    if config['follow-names']:
        config['files']['__ungrouped__'] = opts.files  # These don't need to exist.
    else:
        config['files']['__ungrouped__'] = list(filter_cli_files(opts.files))

    return config


def filter_cli_files(files):
    for entry in files:
        for path in glob.glob(entry):
            if path.startswith('./'):
                path = path.replace('./', '', 1)
            yield path


def start_server(application, config, client_config):
    httpd = httpserver.HTTPServer(application)
    httpd.listen(config['port'], config['addr'])

    log.debug('Config:\n%s', pprint.pformat(config))
    log.debug('Client config:\n%s', pprint.pformat(client_config))
    if 'files' in config:
        log.debug('Files:\n%s',  pprint.pformat(dict(config['files'])))

    loop = ioloop.IOLoop.instance()
    msg = 'Listening on %s:%s' % (config['addr'], config['port'])
    loop.add_callback(log.info, msg)
    loop.start()


def get_resource_dirs():
    try:
        template_dir = pkg_resources.resource_filename('tailon', 'templates')
        assets_dir = pkg_resources.resource_filename('tailon', 'assets')
    except ImportError:
        template_dir, assets_dir = None, None
    return template_dir, assets_dir


def main(argv=sys.argv):
    parser, opts = parseopts()

    if not opts.config and not opts.files:
        parser.print_help()
        msg = 'error: must specify file list on the command line or through the config file'
        print('\n%s' % msg, file=sys.stderr)
        sys.exit(1)

    config = setup(opts)

    if config['debug']:
        enable_debugging()

    file_utils = utils.FileUtils(use_directory_cache=True)
    file_lister = utils.FileLister(file_utils, config['files'], config['follow-names'])

    # TODO: Need to handle situations in which only readable, empty
    # directories were given.
    if not file_lister.all_file_names and not config['follow-names']:
        print('error: none of the given files or directories exist or are readable', file=sys.stderr)
        sys.exit(1)

    if config['http-auth'] and not config['users']:
        print('error: http authentication enabled but no users specified (see the --user option)', file=sys.stderr)
        sys.exit(1)

    client_config = {
        'wrap-lines-initial': config['wrap-lines'],
        'tail-lines-initial': config['tail-lines'],
        # If there is at least one directory in path, we instruct the client to
        # refresh the filelist every time the file select element is focused.
        'refresh_filelist': bool(file_lister.all_dir_names),
        'commands': config['commands'],
    }

    template_dir, assets_dir = get_resource_dirs()

    toolpaths = commands.ToolPaths()
    cmd_control = commands.CommandControl(toolpaths, config['follow-names'])

    application = server.TailonApplication(
        config, client_config, template_dir, assets_dir,
        file_lister=file_lister,
        cmd_control=cmd_control,
    )
    start_server(application, config, client_config)
