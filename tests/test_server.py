#!/usr/bin/env python3
# -*- coding: utf-8; -*-

import pytest

import os
import shutil
import tempfile
import textwrap
from os.path import isdir, dirname, join as pjoin

from tailon import main, server


config = {
	'addr': 'localhost',
	'debug': True,
	'port': 8080,
	'relative-root': 'test',
	'wrap-lines': True
}

client_config = {
	'wrap-lines-initial': True,
	'relative-root': 'test'
}

main.enable_debugging()
wtee_application = server.WTeeApplication(config, client_config, None, None)

@pytest.fixture
def app():
	return wtee_application

@pytest.mark.gen_test
def test_index(http_server, http_client, base_url):
	base_url = os.path.join(base_url, config['relative-root']) + '/'
	res = yield http_client.fetch(base_url)
	assert b'var clientConfig' in res.body
