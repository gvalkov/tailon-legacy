# -*- coding: utf-8; -*-

import os
import re
import logging
import argparse
import collections

log = logging.getLogger('utils')


class CompactHelpFormatter(argparse.RawTextHelpFormatter):
    def __init__(self, *args, **kw):
        super(CompactHelpFormatter, self).__init__(*args, max_help_position=35, **kw)

    def _format_usage(self, *args, **kw):
        usage = super(CompactHelpFormatter, self)._format_usage(*args, **kw)
        return usage.capitalize()

    def _format_action_invocation(self, action):
        if not action.option_strings:
            metavar = self._metavar_formatter(action, action.dest.upper())(1)
            return metavar
        else:
            res = ', '.join(action.option_strings)
            args_string = self._format_args(action, action.dest.upper())
            res = '%s %s' % (res, args_string)
            return res


class FileUtils:
    def __init__(self, use_directory_cache=True):
        self.use_directory_cache = use_directory_cache

        self.directory_cache = {}
        self.directory_mtime = {}

    def listdir(self, path):
        if not self.use_directory_cache:
            return listdir_abspath(path)

        mtime = os.stat(path).st_mtime
        if mtime > self.directory_mtime.get(path, 0):
            files = self.listdir_abspath(path)
            self.directory_cache[path] = files
            self.directory_mtime[path] = mtime
        return self.directory_cache[path]

    @staticmethod
    def listdir_abspath(path, files_only=True):
        paths = [os.path.join(path, i) for i in os.listdir(path)]
        if not files_only:
            return paths
        return [path for path in paths if os.path.isfile(path)]

    @staticmethod
    def statfiles(files, allow_missing=False):
        for path in files:
            if not os.access(path, os.R_OK) and not allow_missing:
                continue

            if os.path.exists(path):
                st = os.stat(path)
                yield path, st.st_size, st.st_mtime
            elif allow_missing:
                yield path, None, None
            else:
                continue


class FileLister:
    def __init__(self, lister, groups, include_missing=False):
        self.lister = lister
        self.groups = groups
        self.include_missing = include_missing

        self.files = collections.OrderedDict()
        self.all_file_names = set()
        self.all_dir_names = set()

        self.refresh()

    def is_path_allowed(self, path):
        return path in self.all_file_names

    def refresh(self):
        log.debug('refreshing group file listings')
        self.files = collections.OrderedDict()
        self.all_dir_names = set()

        for group, paths in self.groups.items():
            files = self.files.setdefault(group, [])
            for path in paths:
                if os.path.isdir(path):
                    self.all_dir_names.add(path)
                    files.extend(self.lister.listdir(path))
                else:
                    files.append(path)

            self.files[group] = list(self.lister.statfiles(files, self.include_missing))

        afn = (i[0] for values in self.files.values() for i in values)
        afn = {os.path.abspath(i) for i in afn}

        self.has_changed = (afn != self.all_file_names)
        self.all_file_names = afn


def parseaddr(arg):
    tmp = arg.split(':')
    port = int(tmp[-1])
    addr = ''.join(tmp[:-1])
    addr = '' if addr == '*' else addr
    return port, addr


def remove_escapes(string):
    return re.sub(r'\x1B\[(?:[0-9]{1,2}(?:;[0-9]{1,2})?)?[m|K]', '', string)


def line_buffer(lines, last_line):
    if not lines[-1].endswith('\n'):
        last_line.append(lines[-1])
        return lines[:-1]
    elif last_line:
        lines[0] = ''.join(last_line) + lines[0]
        del last_line[:]  # list.clear() is with py >= 3.3
        return lines
    else:
        return lines
