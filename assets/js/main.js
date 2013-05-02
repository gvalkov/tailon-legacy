// global $:false, jQuery:false
// jshint laxcomma: true, sub: true

// cached jquery selectors
var $toolbar = $('.toolbar');
var $logselect = $('#logselect');
var $modeselect = $('#modeselect');
var $scriptinput = $('#scriptinput input');
var $actionHide = $('.button-group .action-hide-toolbar');
var $actionShow = $('.button-group .action-show-toolbar');
var $actionClear = $('.button-group .action-clear-logview');
var $actionDownload = $('.button-group .action-download');

// globals
var toolbarHidden = false;
var logviewer = null;
var currentFile = '';
var currentMode = '';
var currentScript = '';
var nlastLines = 60;
var connected = false;
var socketRetries = 10;


// logview
function logview(selector) {
  var self = this
    , fragment = document.createDocumentFragment()
    , container = $(selector)
    , containerDom = container.get()[0]
    , autoScroll = true
    , autoScrollOffset = null
    , history = []
    , linesOfHistory = 200  // 0 for infinite history
    , lastSpan = null
    , lastSpanClasses = '';

  this.container = container;

  this.logEntry = function(data) {
    var span = document.createElement('span');
    span.innerHTML = data;
    span.className = 'log-entry';
    return span;
  };

  this.logNotice = function(msg) {
    var span = document.createElement('span');
    span.innerHTML = msg;
    span.className = 'log-entry log-notice';
    return span;
  };

  this.write = function(spans) {
    var span, i;

    if (!spans.length) {
      return;
    }

    for (i=0; i<spans.length; i++) {
      span = spans[i];
      history.push(span);
      fragment.appendChild(span);
    }

    containerDom.appendChild(fragment);
    self.scroll();
    self.trimHistory();
    fragment.innerHTML = '';

    if (lastSpan) {
      lastSpan.className = lastSpanClasses;
    }

    lastSpan = history[history.length-1];
    lastSpanClasses = lastSpan.className;
    lastSpan.className = lastSpanClasses + ' log-entry-current';
  };

  this.trimHistory = function() {
    if (linesOfHistory !== 0 && history.length > linesOfHistory) {
      for (var i=0; i<(history.length-linesOfHistory); i++) {
        containerDom.removeChild(history.shift());
      }
    }
  };

  this.scroll = function() {
    if (autoScroll) {
      // autoscroll only if div is scrolled within 40px of the bottom
      autoScrollOffset = containerDom.scrollTop-(containerDom.scrollHeight-containerDom.offsetHeight);
      if (Math.abs(autoScrollOffset) < 40) {
        containerDom.scrollTop = containerDom.scrollHeight;
      }
    }
  };

  this.clear = function() {
    containerDom.innerHTML = '';
    fragment.innerHTML = '';
    history = [];
    lastSpan = null;
  };

  return self;
}


var wsurl = ['ws://', window.location.host, window.relativeRoot, '/ws'];
wsurl = wsurl.join('');
var socket = new WebSocket(wsurl);
function onOpen() {
  connected = true;
}

function onClose() {
  connected = false;

  if (socketRetries === 0) {
    return;
  }

  window.setTimeout(function () {
    socketRetries -= 1;
    window.socket = new WebSocket(wsurl);
    socket.onopen = onOpen;
    socket.onclose = onClose;
    socket.onmessage = onMessage;
  }, 1000);
}

function onMessage(e) {
  var data = JSON.parse(e.data);
  var spans = [];
  var i, line;
  var logEntry = logviewer.logEntry;
  var logNotice = logviewer.logNotice;


  if ('err' in data) {
    if (data['err'] === 'truncated') {
      var now = window.moment().format();
      spans.push(logNotice(now + ' - ' + data['fn'] + ' - truncated'));
    } else {
      for (i=0; i<data['err'].length; i++) {
        line = data['err'][i];
        spans.push(logNotice(line));
      }
    }
    // var now = window.moment().format();
    // spans.push(logNotice(data['err']));
    // spans.push(logNotice(now + ' - ' + data['fn'] + ' - truncated'));
  } else {
    $.each(data, function (fn, payload) {
      for (i=0; i<payload.length; i++) {
        line = payload[i];
        spans.push(logEntry(line.replace(/\n$/, '')));
      }
    });
  }

  logviewer.write(spans);
}

function sendCommand(fn, mode, script, last) {
  (function() {
    if (connected) {
      if (fn === '') {
        logviewer.clear();
        return;
      }

      var msg = {};
      msg[mode] = fn;
      msg['last'] = last;

      if (mode != 'tail') {
        if (!script) {
          return;
        } else {
          msg['script'] = script;
        }
      }

      logviewer.clear();
      socket.send(JSON.stringify(msg));
    } else {
      window.setTimeout(arguments.callee, 20);
    }
  })();
}

socket.onopen = onOpen;
socket.onclose = onClose;
socket.onmessage = onMessage;

// Utils
function formatBytes(size) {
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = 0;
  while(size >= 1024) {
    size /= 1024;
    ++i;
  }
  return size.toFixed(1) + ' ' + units[i];
}

function formatFilename(state) {
  if (!state.id) return state.text;
  var size = formatBytes($(state.element).data('size'));
  return '<span>'+state.text+'</span>' + '<span style="float:right;">'+size+'</span>';
}

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}


// UI
$modeselect.select2({
  width: 'element',
  allowClear: true,
  containerCssClass: 'select-container',
  dropdownCssClass: 'select-dropdown-container'
});

$logselect.select2({
  width: 'element',
  placeholder: 'select file',
  allowClear: true,
  formatResult: formatFilename,
  containerCssClass: 'select-container',
  dropdownCssClass: 'select-dropdown-container',
  dropdownAutoWidth: true
});


$modeselect.on('change', function (e) {
  $(document).trigger('changeMode', e.val);
});


$logselect.on('change', function (e) {
  if (e.val === window.currentFile) {
    return;
  } else {
    window.currentFile = e.val;
  }

  $(document).trigger('changeFile', e.val);
});

$actionHide.click(function () {
  $toolbar.slideUp('fast');
  toolbarHidden = true;
  $actionShow.parent().removeClass('hidden');
  $actionShow.parent().slideDown('fast');
});

$actionShow.click(function () {
  $actionShow.parent().slideUp('fast');
  $toolbar.slideDown('fast');
  toolbarHidden = false;
});

$actionClear.click(function () {
    logviewer.clear();
});

function isInputFocused() {
  return document.activeElement.nodeName === 'INPUT';
}

function resizeLogview() {
  var toolbarHeight = (toolbarHidden ? 0 : $toolbar.height());
  logviewer.container.height(window.innerHeight - toolbarHeight);
}

logviewer = logview('#logviewer');
resizeLogview();
$(window).resize(resizeLogview);


// Visual effects
$('.select2-choice').hover(
  function () {$(this).find('div b').addClass('hovered');},
  function () {$(this).find('div b').removeClass('hovered');}
);


// Signals and slots
$(document).on('changeMode', function (e, mode) {
  window.currentMode = mode;
  $(document).trigger('modeChanged', mode);
});

$(document).on('modeChanged', function (e, mode) {
  if (mode === 'awk') {
    $scriptinput.removeAttr('disabled');
    $scriptinput.attr('placeholder', '{print $0; fflush()}');
  } else if (mode === 'grep') {
    $scriptinput.removeAttr('disabled');
    $scriptinput.val('');
    $scriptinput.attr('placeholder', '.*');
  } else {
    $scriptinput.attr('disabled', 'disabled');
    $scriptinput.val('');
    $scriptinput.attr('placeholder', 'mode "'+mode+'" does not accept input');
    sendCommand(currentFile, currentMode, '', nlastLines);
  }
});

$(document).on('scriptChanged', function(e, script) {
  window.currentScript = script;
  sendCommand(currentFile, currentMode, script, nlastLines);
});

$(document).on('changeFile', function (e, fn) {
  currentFile = fn;
  $(document).trigger('fileChanged', fn);
});

$(document).on('fileChanged', function (e, fn) {
  $actionDownload.attr('href', 'fetch/' + fn);
  sendCommand(fn, currentMode, currentScript, nlastLines);
});


// shortcuts:
//   ctrl+l - clear screen (major conflict with 'go to addressbar')
//   ctrl+= - increase font size (logview div only)
//   ctrl+- - decrease font size (logview div only)
//   ret    - mark current time
jwerty.key('ctrl+l', logviewer.clear);
jwerty.key('q', function () {
  if (isInputFocused()) { return true; };
  $logselect.select2('open');
  return false
});
jwerty.key('w', function () {
  if (isInputFocused()) { return true; };
  $modeselect.select2('open');
  return false;
});
jwerty.key('e', function () {
  if (isInputFocused()) { return true; };
  $scriptinput.focus();
  return false;
});


$scriptinput.keypress(function (e) {
  if (e.which === 13) {
    $(document).trigger('scriptChanged', $scriptinput.val());
    return false;
  }
  return true;
});

$(document).trigger('changeMode', 'tail');