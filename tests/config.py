import os, io
import shutil
import textwrap
import tempfile
import unittest

from os.path import isdir, exists, dirname, join as pjoin

from tailon.main import parseconfig


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
                with open(fn, 'w'): pass
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


class TestConfigParse(unittest.TestCase):
    def setUp(self):
        self.tmpf =  TemporaryFiles((['1.log', '2.log', '3.log'], 0o0644),
                                    (['dir/a.log'], 0o0644),
                                    (['dir/b.log'], 0o0644),
                                    (['dir/c.log'], 0o0000))
        self.tmpf.setup()

    def tearDown(self):
        self.tmpf.cleanup()
        
    def test_simple(self):
        config = '''\
        bind: 0.0.0.0:8080
        allow-transfers: true
        files:
          - {dir}/*.log
          - {dir}/dir/[abc].log
        '''.format(dir=self.tmpf.dir)
        cfg = parseconfig(textwrap.dedent(config))

        a1 = set(self.tmpf.files)
        a1.discard(pjoin(self.tmpf.dir, 'dir/c.log'))
        a2 = set(cfg['files']['__ungrouped__'])

        self.assertEqual(a1, a2)
        self.assertEqual(cfg['port'], 8080)
        self.assertEqual(cfg['addr'], '0.0.0.0')
        self.assertEqual(cfg['allow-transfers'], True)

    def test_groups(self):
        config = '''\
        files:
          - {dir}/dir/[ab].log
          - group1:
              - {dir}/[12].log
          - group2:
              - {dir}/3.log
        '''.format(dir=self.tmpf.dir)
        cfg = parseconfig(textwrap.dedent(config))

        self.assertEqual(cfg['port'], 8080)
        self.assertEqual(cfg['addr'], 'localhost')

        a1 = set((pjoin(self.tmpf.dir, i) for i in ('dir/a.log', 'dir/b.log')))
        a2 = set(cfg['files']['__ungrouped__'])
        self.assertEqual(a1, a2)

        b1 = set((pjoin(self.tmpf.dir, i) for i in ('1.log', '2.log')))
        b2 = set(cfg['files']['group1'])
        self.assertEqual(b1, b2)

        c1 = {pjoin(self.tmpf.dir, '3.log')}
        c2 = set(cfg['files']['group2'])
        self.assertEqual(c1, c2)

    def test_groups_depth(self):
        config = '''\
        files:
          - group1:
              - {dir}/[12].log
              - group2:
                  - {dir}/3.log
        '''.format(dir=self.tmpf.dir)

        with self.assertRaises(Exception):
            cfg = parseconfig(textwrap.dedent(config))
        

if __name__ == '__main__':
    unittest.main()
