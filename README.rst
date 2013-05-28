Tailon
======

Tailon is a self-hosted web application for looking at and searching
through log files. It is little more than a fancy wrapper around the
following unix commands::

    tail -f
    tail -f | grep
    tail -f | awk
    tail -f | sed

Tailon is under development.

Usage
=====

.. code-block:: bash

    $ tailon -f /var/log/* 

Similar Projects
----------------

  - clarity_

Attributions
------------

  - tailon's favicon was created from this_ icon.

.. _clarity:   https://github.com/tobi/clarity
.. _this:      http://www.iconfinder.com/icondetails/15150/48/terminal_icon
