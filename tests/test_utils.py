from tailon import utils


def test_line_buffer():
	last_line = []

	assert utils.line_buffer(['abc\n', 'zxc'], last_line) == ['abc\n']
	assert utils.line_buffer(['123\n'], last_line) == ['zxc123\n']
	assert last_line == []


def test_parse_addr():
	assert utils.parseaddr('localhost:8080') == (8080, 'localhost')
