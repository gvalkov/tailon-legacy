#!/usr/bin/env python
# -*- coding: utf-8; -*-

import pytest

import os
import shutil
import tempfile
import textwrap
from os.path import isdir, dirname, join as pjoin

from tailon.main import parseconfig


#-----------------------------------------------------------------------------
class TemporaryFiles:
    def __init__(self, *args):
        self.args = args
        self.files = []

    def setup(self):
        self.dir = tempfile.mkdtemp()

        for fns, mode in (group for group in self.args):
            for fn in fns:
                fn = pjoin(self.dir, fn)
                if not isdir(dirname(fn)):
                    os.makedirs(dirname(fn))
                with open(fn, 'w'):
                    pass
                os.chmod(fn, mode)
                self.files.append(fn)

    def cleanup(self):
        if isdir(self.dir):
            shutil.rmtree(self.dir)

    def __enter__(self):
        self.setup()
        return self

    def __exit__(self, type, value, traceback):
        self.cleanup()


@pytest.yield_fixture()
def tempfiles():
    files = TemporaryFiles(
        (['1.log', '2.log', '3.log'], 0o0644),
        (['dir/a.log'], 0o0644),
        (['dir/b.log'], 0o0644),
        (['dir/c.log'], 0o0000)
    )
    files.setup()
    yield files
    files.cleanup()


def test_simple(tempfiles):
    config = '''\
    bind: 0.0.0.0:8080
    allow-transfers: true
    files:
      - {dir}/*.log
      - {dir}/dir/[abc].log
    '''.format(dir=tempfiles.dir)
    cfg = parseconfig(textwrap.dedent(config))

    a1 = set(tempfiles.files)
    a1.discard(pjoin(tempfiles.dir, 'dir/c.log'))
    a2 = set(cfg['files']['__ungrouped__'])

    assert a1 == a2
    assert cfg['port'] == 8080
    assert cfg['addr'] == '0.0.0.0'
    assert cfg['allow-transfers'] is True

def test_groups(tempfiles):
    config = '''\
    files:
      - {dir}/dir/[ab].log
      - group1:
          - {dir}/[12].log
      - group2:
          - {dir}/3.log
    '''.format(dir=tempfiles.dir)
    cfg = parseconfig(textwrap.dedent(config))

    assert cfg['port'] == 8080
    assert cfg['addr'] == 'localhost'

    a1 = set((pjoin(tempfiles.dir, i) for i in ('dir/a.log', 'dir/b.log')))
    a2 = set(cfg['files']['__ungrouped__'])
    assert a1 == a2

    b1 = set((pjoin(tempfiles.dir, i) for i in ('1.log', '2.log')))
    b2 = set(cfg['files']['group1'])
    assert b1 == b2

    c1 = {pjoin(tempfiles.dir, '3.log')}
    c2 = set(cfg['files']['group2'])
    assert c1 == c2

def test_groups_depth(tempfiles):
    config = '''\
    files:
      - group1:
          - {dir}/[12].log
          - group2:
              - {dir}/3.log
    '''.format(dir=tempfiles.dir)

    with pytest.raises(Exception):
        parseconfig(textwrap.dedent(config))
