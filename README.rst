Project Update
==============

This project is in maintenance mode. Please consider using tailon-next_, which is currently under slow, but steady development. Tailon-next comes with the following user-visible improvements:

* Fully self-contained executables. Just download (or build) and run.
* Tiny footprint - the tailon executable sits at 2.5MB in size and uses roughly  10MB of RSS.
* More responsive user-interface.

While some features are missing, it is already usable to a large degree. Once feature-parity is reached, I plan on renaming this repository to ``tailon-legacy`` and ``tailon-next`` to ``tailon``.

----

Tailon
======

Tailon is a self-hosted web application for looking at and searching
through log files. It is little more than a fancy web wrapper around
the following commands::

    tail -f
    tail -f | grep
    tail -f | awk
    tail -f | sed

Documentation:
    http://tailon.readthedocs.org/en/latest/

Development:
    https://github.com/gvalkov/tailon

Package:
    http://pypi.python.org/pypi/tailon

Changelog:
    http://tailon.readthedocs.org/en/latest/changelog.html
    
    
.. _tailon-next: https://github.com/gvalkov/tailon-next
