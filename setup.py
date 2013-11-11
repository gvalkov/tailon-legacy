#!/usr/bin/env python
# encoding: utf-8

from tailon.version import version
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

kw = {
    'name'             : 'tailon',
    'version'          : version(),
    'description'      : 'webapp for looking at and searching through log files',
    'long_description' : open(join(abspath(dirname(__file__)), 'README.rst')).read(),
    'author'           : 'Georgi Valkov',
    'author_email'     : 'georgi.t.valkov@gmail.com',
    'license'          : 'Revised BSD License',
    'url'              : 'https://github.com/gvalkov/tailon',
    'keywords'         : 'log monitoring tail',
    'classifiers'      : classifiers,
    'packages'         : ['tailon'],
    'install_requires' : [
        'tornado>=3.1.1',
        'sockjs-tornado==1.0.0',
        'PyYAML>=3.10'],
    'entry_points'     : {'console_scripts': ['tailon = tailon.main:main']},
    'zip_safe'         : False,
    'package_data'     : {
        'tailon' : ['../assets/js/vendor/*',
                    '../assets/js/main.js',
                    '../assets/css/*',
                    '../assets/favicon.ico',
                    '../assets/fonts/*',
                    '../templates/*',
                    ]
        },
    'include_package_data': False,
}

if __name__ == '__main__':
    setup(**kw)
