# -*- coding: utf-8; -*-

import subprocess as sub
from time import time
from pathlib import Path

from invoke import run, task


#-----------------------------------------------------------------------------
LOGDIR = Path('./logs')
LOGSIM_PID = Path('/tmp/python-tailon-logsim.pid')
LOGSIM_FILES = [
    LOGDIR / 'nginx/access.log',
    LOGDIR / 'nginx/error.log',
    LOGDIR / 'apache/www.tailon.org/access.log',
    LOGDIR / 'apache/www.tailon.org/error.log',
]

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
