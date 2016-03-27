# -*- coding: utf-8; -*-

import logging
import subprocess
from . import compat

from tornado import process


STREAM = process.Subprocess.STREAM
log = logging.getLogger('tailon')


class ToolPaths:
    command_names = {'grep', 'awk', 'sed', 'tail'}

    def __init__(self, overwrites=None):
        self.cmd_grep = self.first_in_path('grep')
        self.cmd_awk  = self.first_in_path('gawk', 'awk')
        self.cmd_sed  = self.first_in_path('gsed', 'sed')
        self.cmd_tail = self.first_in_path('gtail', 'tail')


        if overwrites:
            for name, value in overwrites.items():
                setattr(self, name, value)

    def first_in_path(self, *cmds):
        for cmd in cmds:
            path = compat.which(cmd)
            if path:
                return path


#-----------------------------------------------------------------------------
class CommandControl:
    def __init__(self, toolpaths):
        self.toolpaths = toolpaths

    def awk(self, script, fn, stdout, stderr, **kw):
        cmd = [self.toolpaths.cmd_awk, '--sandbox', script]
        if fn:
            cmd.append(fn)
        proc = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running awk %s, pid: %s', cmd, proc.proc.pid)
        return proc

    def grep(self, regex, fn, stdout, stderr, **kw):
        cmd = [self.toolpaths.cmd_grep, '--text', '--line-buffered', '--color=never', '-e', regex]
        if fn:
            cmd.append(fn)
        proc = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running grep %s, pid: %s', cmd, proc.proc.pid)
        return proc

    def sed(self, script, fn, stdout, stderr, **kw):
        cmd = [self.toolpaths.cmd_sed, '-u', '-e', script]
        if fn:
            cmd.append(fn)
        proc = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running sed %s, pid: %s', cmd, proc.proc.pid)
        return proc

    def tail(self, n, fn, stdout, stderr, **kw):
        cmd = [self.toolpaths.cmd_tail, '-n', str(n), '-f', fn]
        proc = process.Subprocess(cmd, stdout=stdout, stderr=stderr, **kw)
        log.debug('running tail %s, pid: %s', cmd, proc.proc.pid)
        return proc

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
