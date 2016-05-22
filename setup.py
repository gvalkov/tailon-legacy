#!/usr/bin/env python
# encoding: utf-8

from setuptools import setup

classifiers = [
    'Development Status :: 4 - Beta',
    'Programming Language :: Python :: 2.7',
    'Programming Language :: Python :: 3',
    'Programming Language :: Python :: 3.3',
    'Programming Language :: Python :: 3.4',
    'Programming Language :: Python :: 3.5',
    'License :: OSI Approved :: BSD License',
    'Intended Audience :: Developers',
    'Operating System :: POSIX :: Linux',
]

requirements = [
    'tornado>=4.3',
    'sockjs-tornado>=1.0.3',
    'PyYAML>=3.11',
]

kw = {
    'name':             'tailon',
    'version':          '0.6.0',
    'description':      'Webapp for looking at and searching through log files',
    'long_description': open('README.rst').read(),
    'author':           'Georgi Valkov',
    'author_email':     'georgi.t.valkov@gmail.com',
    'license':          'Revised BSD License',
    'url':              'https://github.com/gvalkov/tailon',
    'keywords':         'log monitoring tail',
    'packages':         ['tailon'],
    'classifiers':      classifiers,
    'install_requires': requirements,
    'include_package_data': True,
    'zip_safe': False,
    'entry_points': {
        'console_scripts': [
            'tailon = tailon.main:main_tailon',
            'wtee   = tailon.main:main_wtee'
        ]
    },
}

if __name__ == '__main__':
    setup(**kw)
