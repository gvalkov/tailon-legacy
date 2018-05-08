# -*- coding: utf-8 -*-

import sys, os, re
import alabaster


on_rtd = os.environ.get('READTHEDOCS', None) == 'True'

templates_path = ['_templates']
source_suffix = '.rst'

extensions = [
    'alabaster',
    'sphinxcontrib.images'
]

images_config = {
    'backend' : 'LightBox2',
}

#source_encoding = 'utf-8-sig'

master_doc = 'index'

project = u'tailon'
copyright = u'2013-2017, Georgi Valkov'

release = '1.4.0'
version = release

exclude_patterns = ['_build']

# The reST default role (used for this markup: `text`) to use for all documents.
#default_role = None

# If true, '()' will be appended to :func: etc. cross-reference text.
#add_function_parentheses = True

# If true, the current module name will be prepended to all description
# unit titles (such as .. function::).
#add_module_names = True

# If true, sectionauthor and moduleauthor directives will be shown in the
# output. They are ignored by default.
#show_authors = False

pygments_style = 'sphinx'

# A list of ignored prefixes for module index sorting.
#modindex_common_prefix = []

html_theme_path = [alabaster.get_path()]
html_theme = 'alabaster'
html_sidebars = {
   '**': []
}

#html_theme_options = {}
#html_theme_path = []
#html_title = None
#html_short_title = None
#html_logo = None
#html_favicon = None
html_static_path = ['_static']
#html_last_updated_fmt = '%b %d, %Y'
#html_use_smartypants = True
#html_sidebars = {}
#html_additional_pages = {}
#html_domain_indices = True
#html_use_index = True
#html_split_index = False
#html_show_sourcelink = True
#html_show_sphinx = True
#html_show_copyright = True

htmlhelp_basename = 'tailondoc'

latex_elements = {}
latex_documents = [
  ('index', 'tailon.tex', u'tailon Documentation',
   u'Georgi Valkov', 'manual'),
]
#latex_logo = None
#latex_use_parts = False
#latex_show_pagerefs = False
#latex_show_urls = False
#latex_appendices = []
#latex_domain_indices = True


man_pages = [
    ('index', 'tailon', u'tailon Documentation',
     [u'Georgi Valkov'], 1)
]

texinfo_documents = [
  ('index', 'tailon', u'tailon Documentation',
   u'Georgi Valkov', 'tailon', 'One line description of project.',
   'Miscellaneous'),
]
