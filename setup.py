#!/usr/bin/env python
# encoding: utf-8

from tailon import version
from os.path import abspath, dirname, join
from setuptools import setup

classifiers = (
    'Development Status :: 4 - Beta',
    'Programming Language :: Python :: 2.7',
    'Programming Language :: Python :: 3',
    'Programming Language :: Python :: 3.3',
    'License :: OSI Approved :: BSD License',
    'Intended Audience :: Developers',
    'Operating System :: POSIX :: Linux',
)

requirements = (
    'tornado>=3.2.2',
    'sockjs-tornado==1.0.0',
    'PyYAML>=3.11',
)

here = abspath(dirname(__file__))
kw = {
    'name':             'tailon',
    'version':          version,
    'description':      'Webapp for looking at and searching through log files',
    'long_description': open(join(here, 'README.rst')).read(),

    'author':           'Georgi Valkov',
    'author_email':     'georgi.t.valkov@gmail.com',
    'license':          'Revised BSD License',
    'url':              'https://github.com/gvalkov/tailon',
    'keywords':         'log monitoring tail',
    'classifiers':      classifiers,

    'packages':         ['tailon'],
    'install_requires': requirements,
    'entry_points':     {'console_scripts': ['tailon = tailon.main:main']},
    'include_package_data': False,
    'zip_safe': False,
}

if __name__ == '__main__':
    setup(**kw)
