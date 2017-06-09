Changelog
---------

1.3.0 (Jun 09, 2017)
====================

- Fix a regression that caused all whitespace to be squashed.
- Fix an issue with the initial state of line wrapping.
- Support enabling of debug mode from the configuration file.


1.2.1 (May 29, 2017)
====================

- Depend on tornado >= 4.0.0 instead of on >= 4.5.1 (the latest and greatest
  at the moment).


1.2.0 (May 23, 2017)
====================

- Add optional basic and digest HTTP authentication using tornado-http-auth_.
  This feature can be enabled with the ``-p/--http-auth`` and ``-u/--user``
  command-line switches or the ``http-auth`` and ``user`` config file keys.
  For example:

     tailon -f /var/log --http-auth digest -u joe:secret1 -u bob:secret2


1.1.0 (Sep 17, 2016)
====================

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
.. _tornado-http-auth: https://github.com/gvalkov/tornado-http-auth
