Development
-----------

Front-end assets
================

::

   . <root>
   |-- bower_components/
   |-- bower.json
   |-- setup.py
   |-- tasks.py
   |-- webassets.yaml
   `-- tailon/assets
       |-- fonts/
       |-- gen/
       |-- main.js
       |-- scss/
       `-- vendor/

The asset pipeline in tailon uses bower_, webassets_ and several invoke_ tasks that tie
them together.

Bower is used to fetch tailon's front-end dependencies. When ``bower install`` is ran in
the root of the project, the assets listed in ``bower.json`` are downloaded to the
``bower_components`` directory.

With the help of ``inv collectstatic``, all source files in ``bower_components`` are
copied to ``tailon/assets/vendor``. Note that unlike ``bower_components``, this directory
is committed to git.

Running ``inv webassets`` generates the files in ``inv tailon/assets/gen``. These are the
assets that end up in the tailon source package that is uploaded to PyPi. The rules that
govern the asset pipeline are defined in ``webassets.yaml``. In short, the following
transformations happen::

  tailon/assets/scss/*    --> compile,minify --> tailon/assets/gen/main.css
  tailon/assets/vendor/*  --> jsmin          --> tailon/assets/gen/3rdparty.js
  tailon/assets/main.js   --> jsmin          --> tailon/assets/gen/main.js

This also places the following lines in ``tailon/templates/index.html``::

  <link rel='stylesheet' href='{{root}}assets/gen/main.css'>
  <script src='{{root}}assets/gen/3rdparty.js'></script>
  <script src='{{root}}assets/gen/main.js'></script>


A more pragmatic introduction to the asset pipeline would be:

1) Adding or updating a third-party dependency:

.. code-block:: bash

    # edit bower.json
    $ bower install
    $ inv collectstatic
    $ inv webassets --replace --no-expire

2) Making changes to ``main.js`` or ``scss/*``:

.. code-block:: bash

    $ inv webassets --replace --no-expire

Or if you don't want to minify and concatenate assets:

.. code-block:: bash

    $ inv webassets --replace --no-expire --debug






Todo
====

  - There are still parts of the UI that haven't been implemented.

  - Fix select2 related styling glitches.

  - Visual/Audible alarms on log activity.

  - Interface themes.

  - Windows support.

  - Investigate the use of seccomp_ on Linux for unsafe commands.


.. _seccomp:    http://en.wikipedia.org/wiki/Seccomp
.. _bower:      http://bower.io/
.. _webassets:  https://webassets.readthedocs.org/
.. _invoke:     http://invoke.readthedocs.org/
