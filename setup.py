from setuptools import setup


classifiers = [
    'Development Status :: 5 - Production/Stable',
    'Programming Language :: Python :: 2.7',
    'Programming Language :: Python :: 3',
    'License :: OSI Approved :: BSD License',
    'Intended Audience :: Developers',
]

requirements = [
    'deepmerge',
    'tornado>=4.0.0,<5.0.0',
    'tornado-http-auth>=1.0.0',
    'sockjs-tornado>=1.0.0',
    'PyYAML>=6.0',
]

kw = {
    'name':             'tailon',
    'version':          '1.4.3',
    'description':      'Webapp for looking at and searching through log files',
    'long_description': open('README.rst').read(),
    'author':           'Georgi Valkov',
    'author_email':     'georgi.t.valkov@gmail.com',
    'license':          'Revised BSD License',
    'url':              'https://github.com/gvalkov/tailon-legacy',
    'keywords':         'log monitoring tail',
    'packages':         ['tailon'],
    'classifiers':      classifiers,
    'install_requires': requirements,
    'include_package_data': True,
    'zip_safe': False,
    'entry_points': {
        'console_scripts': [
            'tailon = tailon.main:main',
        ]
    },
}

if __name__ == '__main__':
    setup(**kw)
