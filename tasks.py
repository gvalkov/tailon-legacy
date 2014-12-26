# -*- coding: utf-8; -*-

import json
import subprocess as sub

from glob import glob
from time import time
from pathlib import Path

from invoke import run, task
from webassets.loaders import YAMLLoader


#-----------------------------------------------------------------------------
LOGDIR = Path('./logs')
LOGSIM_PID = Path('/tmp/python-tailon-logsim.pid')
LOGSIM_FILES = [
    LOGDIR / 'nginx/access.log',
    LOGDIR / 'nginx/error.log',
    LOGDIR / 'apache/www.tailon.org/access.log',
    LOGDIR / 'apache/www.tailon.org/error.log',
]

BOWERDIR = Path('bower_components')
ASSETDIR = Path('tailon/assets')

#-----------------------------------------------------------------------------
# Invoke tasks.
#-----------------------------------------------------------------------------
@task
def logsim_start(update_msec='500,3000',
                 truncate_msec='10000,20000',
                 rate='1,3', seed=None,
                 pid=str(LOGSIM_PID)):

    seed = seed if seed else str(time())
    files = ' '.join(str(i) for i in LOGSIM_FILES)

    cmd = '''\
    python tests/utils.py \
        --update-msec {update_msec} \
        --truncate-msec {truncate_msec} \
        --rate {rate}  \
        --pid  {pid}   \
        --seed {seed}  \
        --daemon start \
        {files}
    '''.format(**vars())
    run(cmd)

@task
def logsim_stop():
    run('python tests/utils.py --daemon stop')

@task
def logsim():
    files = ' '.join(str(i) for i in LOGSIM_FILES)
    sub.check_call('python -m tailon.main  -d -a -f {}'.format(files), shell=True)

@task
def test():
    run('py.test -sv tests', pty=True)

@task(aliases=['lsbower'])
def list_bowerfiles():
    for source in bowerfiles():
        print(source)

@task
def collectstatic():
    # Copy bower main files to the vendor dir.
    for source in bowerfiles():
        dest = Path('tailon/assets/vendor', *source.parts[1:])
        run('install -vD {} {}'.format(source, dest))

@task
def webassets(debug=False, replace=False):
    #--------------------------------------------------------------------------
    # Copy fonts to webassets dir.
    print('* Copying fonts to %s' % ASSETDIR)
    fonts = [
        'assets/vendor/fontawesome/fonts/FontAwesome.otf',
        'assets/vendor/fontawesome/fonts/fontawesome-webfont.eot',
        'assets/vendor/fontawesome/fonts/fontawesome-webfont.svg',
        'assets/vendor/fontawesome/fonts/fontawesome-webfont.ttf',
        'assets/vendor/fontawesome/fonts/fontawesome-webfont.woff',
    ]
    run('rsync -v {} {}'.format(' '.join(fonts), Path(ASSETDIR)/'fonts'))

    #--------------------------------------------------------------------------
    # Load webassets environemtn
    env = YAMLLoader('./webassets.yaml').load_environment()

    #--------------------------------------------------------------------------
    # Generate css/js urls.
    css_urls = [env['external-css'],  env['selectize-css'], env['internal-css']]
    css_urls = [url_to_link(url) for urls in css_urls for url in urls.urls()]

    js_urls = [env['external-js'].urls(), env['internal-js'].urls()]
    js_urls = [url_to_script(url) for urls in js_urls for url in urls]

    print()
    print('* URLs css:')
    print(''.join((i.lstrip() for i in css_urls)))

    print('* URLs js:')
    print(''.join((i.lstrip() for i in js_urls)))

    if replace:
        sedplaceholder('tailon/templates/index.html', '<!-- WEBASSETS CSS -->', css_urls)
        sedplaceholder('tailon/templates/index.html', '<!-- WEBASSETS JS -->',  js_urls)


#-----------------------------------------------------------------------------
# Utility functions.
#-----------------------------------------------------------------------------
def sedplaceholder(filename, placeholder, replacement):
    lines = open(filename).readlines()
    start, end = None, None
    for n, line in enumerate(lines):
        if line.strip() == placeholder:
            if not start:
                start = n
                continue
            if not end:
                end = n
            if start and end:
                break

    lines[start + 1:end] = replacement
    with open(filename, 'w') as fh:
        fh.write(''.join(lines))

def url_to_link(url):
    return "  <link rel='stylesheet' href='{{root}}%s'>\n" % url

def url_to_script(url):
    return "  <script src='{{root}}%s'></script>\n" % url

def bowerfiles():
    res = run('bower list --paths --json', hide='out')
    res = json.loads(res.stdout)

    # Flatten the output of `bower list` and expand globs.
    main = ([i] if not isinstance(i, list) else i for i in res.values())
    main = (glob(j) for i in main for j in i)
    main = [Path(j) for i in main for j in i]
    return main

def vendorfiles():
    for source in bowerfiles():
        yield Path(ASSETDIR, *source.parts[1:])
