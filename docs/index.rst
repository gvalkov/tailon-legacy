Tailon
======

Tailon is a self-hosted web application for looking at and searching
through log files. It is little more than a fancy web wrapper around
the following commands::

  tail -f
  tail -f | grep
  tail -f | awk
  tail -f | sed


Screenshots
-----------

.. thumbnail::  tail.png
   :width: 28%
   :group: screenshots
   :alt:   Tail

.. thumbnail::  grep.png
   :width: 28%
   :group: screenshots
   :alt:   Tail | Grep

.. thumbnail::  awk.png
   :width: 28%
   :group: screenshots
   :alt:   Tail | Awk


Installation
------------

The latest stable version of tailon can be installed from pypi_:

.. code-block:: bash

    $ pip install tailon

The development version is available on github_ and can also be
installed with the help of pip:

.. code-block:: bash

    $ pip install git+git://github.com/gvalkov/tailon.git

Tailon works with Python 2.7 and newer. Using it with Python >= 3.3 is
encouraged.


Quick start
-----------

Tailon
~~~~~~

Tailon is a command-line tool that spawns a local http server that
serves your logfiles. It can be configured entirely from its
command-line interface or through the convenience of a yaml config
file.

To get started, run tailon with the list of files that you wish to
monitor:

.. code-block:: bash

    $ tailon -f /var/log/nginx/* /var/log/apache/{access,error}.log

If at least one of the specified files is readable, tailon will start
listening on http://localhost:8080.

Tailon's server-side functionality is summarized entirely in its help message::

   Usage: tailon [-c path] [-f path [path ...]] [-h] [-d] [-v]
                 [--output-encoding enc] [--input-encoding enc] [-b addr:port]
                 [-r path] [-a] [-f] [-t num] [-m [cmd [cmd ...]]]
                 [--no-wrap-lines]

   Tailon is a web app for looking at and searching through log files.

   Required options:
     -c, --config path               yaml config file
     -f, --files path [path ...]     list of files or file wildcards to expose

   General options:
     -h, --help                      show this help message and exit
     -d, --debug                     show debug messages
     -v, --version                   show program's version number and exit
     --output-encoding enc           encoding for output
     --input-encoding enc            encoding for input and output (default utf8)

   Server options:
     -b, --bind addr:port            listen on the specified address and port
     -r, --relative-root path        web app root path
     -a, --allow-transfers           allow log file downloads
     -F, --follow-names              allow tailing of not-yet-existent files
     -t, --tail-lines num            number of lines to tail initially
     -m, --commands [cmd [cmd ...]]  allowed commands (default: tail grep awk)

   User-interface options:
     --no-wrap-lines                 initial line-wrapping state (default: true)

   Example config file:
     bind: 0.0.0.0:8080      # address and port to bind on
     allow-transfers: true   # allow log file downloads
     follow-names: false     # allow tailing of not-yet-existent files
     relative-root: /tailon  # web app root path (default: '')
     commands: [tail, grep]  # allowed commands
     tail-lines: 10          # number of lines to tail initially
     wrap-lines: true        # initial line-wrapping state

     files:
       - '/var/log/messages'
       - '/var/log/nginx/*.log'
       - '/var/log/xorg.[0-10].log'
       - '/var/log/nginx/'   # all files in this directory
       - 'cron':             # it's possible to add sub-sections
           - '/var/log/cron*'

   Example command-line:
     tailon -f /var/log/messages /var/log/debug -m tail
     tailon -f '/var/log/cron*' -a -b localhost:8080
     tailon -f /var/log/
     tailon -c config.yaml -d


Please note that if the file list includes wildcard characters, they
will be expanded only once at server-start time.


Reverse proxy configuration
---------------------------

Nginx
~~~~~

1) Run ``tailon``, binding it to localhost and specifiying
   a relative root of your liking. For example:

.. code-block:: bash

   $ tailon -f /var/log/nginx/* -b localhost:8084 -r '/tailon/'

2) Add the following location directives to ``nginx.conf``:

.. code-block:: none

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

Tailon runs commands on the server it is installed on. While commands that
accept a script argument (such as awk, sed and grep) should be invulnerable
to shell injection, they may still allow for arbitrary command execution
and unrestricted access to the filesystem.

To clarify this point, consider the following input to the sed command::

  s/a/b'; cat /etc/secrets

This will result in an error, as tailon does not invoke commands through a
shell. On the other hand, the following command is a perfectly valid sed
script that has the same effect as the above attempt for shell injection::

  r /etc/secrets

The default set of enabled commands - tail, grep and awk - should be safe
to use. GNU awk is ran in sandbox_ mode, which prevents scripts from
accessing your system, either through the ``system()`` builtin or by using
input redirection.


Development
-----------

Code, bug reports and feature requests are kindly accepted on tailon's
github_ page. Please refer to the :doc:`development <development>`
document for more information on developing tailon.


Similar Projects
----------------

- clarity_
- errorlog_
- `log.io`_
- rtail_
- wtee_


Attributions
------------

Tailon's favicon was created from this_ icon.


License
-------

Tailon is released under the terms of the `Revised BSD License`_.


.. _pypi:      http://pypi.python.org/pypi/tailon
.. _github:    https://github.com/gvalkov/tailon
.. _wtee:      https://github.com/gvalkov/wtee
.. _clarity:   https://github.com/tobi/clarity
.. _errorlog:  http://www.psychogenic.com/en/products/Errorlog.php
.. _`log.io`:  http://logio.org/
.. _rtail:     http://rtail.org/
.. _this:      http://www.iconfinder.com/icondetails/15150/48/terminal_icon
.. _sandbox:   http://www.gnu.org/software/gawk/manual/html_node/Options.html#index-g_t_0040code_007b_002dS_007d-option-277
.. _`Revised BSD License`: https://raw.github.com/gvalkov/tailon/master/LICENSE
