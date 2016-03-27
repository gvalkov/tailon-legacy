Development
===========

Notes on developing tailon, the front-end asset build flow and a list
of long-standing TODOs.


Prerequisites
-------------

Generating tailon's front-end assets requires bower_, webassets_, invoke_ and
autoprefixer_. Everything can be installed by running the following commands in
the repository root:

.. code-block:: bash

    $ pip install -r requirements-dev.txt
    $ npm install


Front-end assets
----------------

Tailon's asset pipeline uses bower_, webassets_ and several invoke_
tasks that tie them together. The tree structure of relevant files is
as follows::

   . <root>
   |-- bower_components/   # 'bower install' download location (git ignored)
   |-- bower.json          # list of pinned front-end requirements
   |-- setup.py
   |-- tasks.py            # build configuration (uses the invoke tool)
   |-- webassets.yaml      # asset pipeline configuration
   `-- tailon/assets
       |-- fonts/
       |-- gen/
       |-- js/
       |-- scss/
       `-- vendor/

Bower is used to fetch tailon's front-end dependencies. When ``bower install`` is ran in
the root of the project, the assets listed in ``bower.json`` are downloaded to the
``bower_components`` directory.

With the help of the ``inv collectstatic`` task, all source files in ``bower_components``
are copied to ``tailon/assets/vendor``. Note that unlike ``bower_components``, this
directory is committed to git.

Running ``inv webassets`` generates the files in ``inv tailon/assets/gen``.
These are the assets that end up in the tailon source distribution that is
uploaded to PyPi. The rules that govern the asset pipeline are defined in
``webassets.yaml``. In short, the following transformations are applied::

  tailon/assets/scss/*    --> compile,minify   --> tailon/assets/gen/main.css
  tailon/assets/vendor/*  --> jsmin            --> tailon/assets/gen/3rdparty.js
  tailon/assets/Main.js   --> rmconsole,jsmin  --> tailon/assets/gen/js/Main.min.js

The ``tailon/assets/Main.js`` file is generated from the typescript sources in
``tailon/assets/js``. The process is handled by the ``compile_typescript`` task.

The assets links find their way into the ``templates/base.html`` template
through the ``webassets --replace`` task. It simply replaces the html between
the ``WEBASSETS CSS`` and ``WEBASSETS JS`` placeholders with the links to the
compiled, minified and concatenated scss and js files. For example::

  <link rel='stylesheet' href='{{root}}assets/gen/main.css'>
  <script src='{{root}}assets/gen/3rdparty.js'></script>
  <script src='{{root}}assets/gen/main.js'></script>

You may also want to skip the minification and concatenation steps with the
``--debug`` option.


Development data
----------------

You may use the ``inv logsim_start`` and ``in logsim_start`` tasks to generate
random logfiles that you can monitor with tailon.


FAQ
---

* I just want to make a small change to the frontend code or styles. What do I do?

  Modify the typescript or scss files in ``tailon/assets`` and run:

  .. code-block:: bash

     # Compile and minify SCSS; Concatenate and minify JS.
     $ inv webassets --replace

     # Without minifying and concatenating JS (usefuly for debugging).
     $ inv webassets --replace --debug


* Adding or updating a third-party dependency:

  .. code-block:: bash

     # Run after adding the dependency to the bower.json file.
     $ bower install
     $ inv collectstatic  # Copies from bower_components to tailon/assets/vendor.
     $ inv webassets --replace --no-expire


TODO
----

- There are still parts of the UI that haven't been implemented.

- Fix styling issues related to selectize.

- Visual/Audible alarms on log activity.

- Interface themes.

- Improved windows support.

- Investigate the use of seccomp_ on Linux for unsafe commands.

- Handling of different tool versions (i.e. GNU awk vs BSD awk).


.. _seccomp:      http://en.wikipedia.org/wiki/Seccomp
.. _bower:        http://bower.io/
.. _webassets:    https://webassets.readthedocs.org/
.. _invoke:       http://invoke.readthedocs.org/
.. _autoprefixer: https://github.com/postcss/autoprefixer
