Tailon
======

Tailon is a self-hosted web application for looking at and searching
through log files. It is little more than a fancy web wrapper around
the following unix commands::

    tail -f
    tail -f | grep
    tail -f | awk

Screenshots
-----------

.. image::  https://github.com/gvalkov/screenshots/raw/master/thumb/tailon-tail.png
   :target: https://github.com/gvalkov/screenshots/raw/master/full/tailon-tail.png
   :alt:    Tail

.. image::  https://github.com/gvalkov/screenshots/raw/master/thumb/tailon-grep.png
   :target: https://github.com/gvalkov/screenshots/raw/master/full/tailon-grep.png
   :alt:    Tail | Grep

.. image::  https://github.com/gvalkov/screenshots/raw/master/thumb/tailon-awk.png
   :target: https://github.com/gvalkov/screenshots/raw/master/full/tailon-awk.png
   :alt:    Tail | Awk


Installation
------------

The latest stable version of tailon is available on pypi, while the
development version can be installed from github:

.. code-block:: bash

    $ pip install tailon  # stable version
    $ pip install git+git://github.com/gvalkov/tailon.git  # development version

Alternatively, it can be installed manually:

.. code-block:: bash

    $ git clone git@github.com:gvalkov/tailon.git
    $ cd tailon
    $ git reset --hard HEAD $versiontag
    $ python setup.py install

Usage
-----

To get started with *tailon* you give it a list of files that you wish
to monitor:

.. code-block:: bash

    $ tailon -f /var/log/nginx/* /var/log/apache/{access,error}.log

If at least one of the specified files is readable by the current user,
tailon will start listening on http://localhost:8080 .

Tailon's server-side functionality is documented in its help message::

    $ tailon --help
    Usage: tailon [-c path] [-f path [path ...]] [-h] [-d] [-v] [-b addr:port]
                  [-r path] [-a]

    Tailon is a webapp for looking at and searching through log files.

    Required arguments:
      -c, --config path            yaml config file
      -f, --files path [path ...]  list of files or file wildcards to expose

    Optional arguments:
      -h, --help                   show this help message and exit
      -d, --debug                  show debug messages
      -v, --version                show program's version number and exit
      -b, --bind addr:port         listen on the specified address and port
      -r, --relative-root path     web app root path
      -a, --allow-transfers        allow file downloads

    Example config file:
      bind: 0.0.0.0:8080      # address and port to bind on 
      allow-transfers: true   # allow file downloads
      relative-root: /tailon  # web app root path (default: '')

      files:
        - '/var/log/messages'
        - '/var/log/nginx/*.log'
        - '/var/log/xorg.[0-10].log'
        - 'cron':             # sub-section (not implemented yet)
            - '/var/log/cron*'

Usage with nginx
----------------

Two things need be done in order to get tailon running with nginx:

1) Run tailon, binding it to localhost and specifiying a relative
   root of your liking. Example::

.. code-block:: bash

    $ tailon -f /var/log/nginx/* -b localhost:8084 -r '/tailon/'

2) Add the following location directives to ``nginx.conf``::

    location /tailon/ws {
        proxy_pass http://localhost:8084/tailon/ws;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }   

    location /tailon {
        proxy_pass http://localhost:8084;
    }  

Security
--------

Tailon runs commands on the server it is installed on. While commands
that accept a script (eg. awk, sed, grep) should be invulnerable to
shell injection, they may still allow for arbitrary command execution
and/or access to the filesystem. To clarify, the following sed
script - ``'s/a/b';cat /etc/passwd'`` - will result in an error as the
command is not invoked through a shell. On the other hand, ``r
/etc/passwd`` is a perfectly valid sed script that has the same effect
as the above attempt for a shell injection.

The default set of enabled commands - tail, grep and awk - should be
safe to use. Awk is ran in sandbox_ mode, which prevents scripts from
accessing your system (either through the ``system()`` builtin or
through input redirection).

Todo
----

  - Investigate the use of seccomp_ for commands that do not implement
    sandboxing themselves.

  - My longterm goal is to bring as many ideas from multitail_ into
    tailon as possible.

  - Windows/FreeBSD support. While tailon runs on these platforms, the
    availability and functionality of Coreutils may prevent tailon
    from working as expected. Including a cross-platform Python
    version of tail and grep will guarantee a set of functionality
    available to all platforms.

  - Tabbed interface.

  - Visual/Audible alarms on log activity.

  - Interface themes.

Similar Projects
----------------

  - clarity_
  - errorlog_
  - `log.io`_

Attributions
------------

  - Tailon's favicon was created from this_ icon.

License
-------

Tailon is released under the terms of the `New BSD License`_.

.. _multitail: http://www.vanheusden.com/multitail/
.. _clarity:   https://github.com/tobi/clarity
.. _errorlog:  http://www.psychogenic.com/en/products/Errorlog.php
.. _`log.io`:  http://logio.org/
.. _this:      http://www.iconfinder.com/icondetails/15150/48/terminal_icon
.. _sandbox:   http://www.gnu.org/software/gawk/manual/html_node/Options.html#index-g_t_0040code_007b_002dS_007d-option-277
.. _seccomp:   http://en.wikipedia.org/wiki/Seccomp
.. _`New BSD License`: https://raw.github.com/gvalkov/tailon/master/LICENSE
