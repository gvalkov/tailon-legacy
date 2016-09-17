Changelog
---------

Development
===========

- Add the ability to set the initial file, command and command script through
  the query string. For example:

     http://localhost:8081/?file=logs/nginx/error.log&cmd=grep&script=GET

  If a file or command does not exist, tailon will use the first in the list
  (which is the default behavior).

- Add the ``-F/--follow-names`` command-line switch and the ``follow-names``
  config file option. This option instructs tailon to tail files which do not
  exist yet. It is equivalent to running ``tail -F`` instead of the ``tail -f``.

- Fix ``tail-lines`` not being read from the configuration file.

1.0.0 (Sep 10, 2016)
====================

- Split wtee_ into a separate project.


0.1.0 - 0.6.0
=============

- Older versions for which a changelog was not kept.


.. _wtee: https://github.com/gvalkov/wtee
