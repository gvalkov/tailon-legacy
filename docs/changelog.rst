Changelog
---------

Development
===========

- Add the ability to set the initial file, command and command script through
  the query string. For example:

     http://localhost:8081/?file=logs/nginx/error.log&cmd=grep&script=GET

  If a file or command does not exist, tailon will use the first in the list
  (which is the default behaviour).


1.0.0 (Sep 10, 2016)
====================

- Split wtee_ into a separate project.


0.1.0 - 0.6.0
=============

- Older versions for which a changelog was not kept.


.. _wtee: https://github.com/gvalkov/wtee
