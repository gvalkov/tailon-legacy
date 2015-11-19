# -*- coding: utf-8; -*-

import argparse


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
