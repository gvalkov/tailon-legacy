// global $:false, jQuery:false
// jshint laxcomma: true, sub: true

// globals
var logviewer = null;
var connected = false;
var socketRetries = 10;

// utils
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

function isInputFocused() {
  return document.activeElement.nodeName === 'INPUT';
}

function resizeLogview() {
  var toolbarHeight = (uimodel.get('pannel-hidden') ? 0 : $('.toolbar').height()); // todo
  logviewer.container.height(window.innerHeight - toolbarHeight);
}

// models
var CommandModel = Backbone.Model.extend({
  defaults: {
    'mode': 'tail',
    'file':  null,
    'script': null,
    'tail-lines': 60
  }
});

var UiModel = Backbone.Model.extend({
  defaults: {
    'panel-hidden': false
  }
});

// views
var ModeSelectView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'change': 'modechange'
  },

  modechange: function (change) {
    this.model.set({'mode':change.val});
  },

  render: function() {
    this.$el.select2({
      width: 'element',
      allowClear: true,
      containerCssClass: 'select-container',
      dropdownCssClass: 'select-dropdown-container'
    });
    return this;
  }
});

var FileSelectView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'change': 'filechange'
  },

  filechange: function(change) {
    this.model.set({'file':change.val});
  },

  render: function() {
    this.$el.select2({
      width: 'element',
      placeholder: 'select file',
      allowClear: true,
      formatResult: formatFilename,
      containerCssClass: 'select-container',
      dropdownCssClass: 'select-dropdown-container',
      dropdownAutoWidth: true
    });
    return this;
  }
});

var ScriptView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change:mode', this.rendermode);
    this.render();
  },

  events: {
    'change': '_changeScript'
  },

  _changeScript: function() {
    this.model.set({'script': this.$el.val()});
  },

  _placeholders: {
    'awk': '{print $0; fflush()}',
    'grep': '.*'
  },

  rendermode: function() {
    var mode = this.model.get('mode')
      , el = this.$el;

    if (mode in this._placeholders) {
      el.removeAttr('disabled');
      el.val('');
      el.attr('placeholder', this._placeholders[mode]);
    } else {
      el.attr('disabled', 'disabled');
      el.val('');
      el.attr('placeholder', 'mode "'+mode+'" does not accept input');
    }

    return this;
  },

  render: function() {
    return this;
  }
});

var PanelView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change:panel-hidden', this.hideshowpanel);
    this.listenTo(this.options.cmdmodel, 'change:file', this.updatehrefs); // don't know

    this.$downloadA = this.$el.find('.toolbar-item .button-group .action-download');
  },

  events: {
    'click .toolbar-item .button-group .action-hide-toolbar':  'sethidden',
    'click .toolbar-item .button-group .action-clear-logview': 'clearlogview'
  },

  // update the download link whenever the selected file changes
  updatehrefs: function() {
    this.$downloadA.attr('href', 'fetch/' + this.options.cmdmodel.get('file'));
  },

  hideshowpanel: function() {
    if (this.model.get('panel-hidden')) {
      this.$el.slideUp('fast');
    } else {
      this.$el.slideDown('fast');
    }
  },

  sethidden: function() {
    this.model.set({'panel-hidden': true});
  },

  clearlogview: function() {
    logviewer.clear();
  }
});


var ActionsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change:panel-hidden', this.hideshowactions);
  },

  events: {
    'click .action-show-toolbar': 'sethidden'
  },

  hideshowactions: function() {
    console.log('asdfasdf');
    if (this.model.get('panel-hidden')) {
      this.$el.removeClass('hidden');
    } else {
      this.$el.addClass('hidden');
    }
  },

  sethidden: function() {
    this.model.set({'panel-hidden': false});
  }
});

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
  var data = JSON.parse(e.data)
    , spans = [], i, line
    , logEntry = logviewer.logEntry
    , logNotice = logviewer.logNotice;

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

function wscommand(m) {
  var fn = m.get('file')
    , mode = m.get('mode')
    , script = m.get('script')
    , lines = m.get('tail-lines');

  (function() {
    if (connected) {
      if (fn === null) {
        logviewer.clear();
        return;
      }

      var msg = {};
      msg[mode] = fn;
      msg['last'] = lines;

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

logviewer = logview('#logviewer');

window.cmdmodel = new CommandModel();
window.uimodel = new UiModel();

window.fileselectview = new FileSelectView({model: cmdmodel, el: '#logselect'});
window.modeselectview = new ModeSelectView({model: cmdmodel, el: '#modeselect'});
window.scriptview = new ScriptView({model: cmdmodel, el: '#scriptinput input'});
window.actionsview = new ActionsView({model: uimodel, el: '.quickbar .button-group'});
window.buttonsview = new PanelView({model: uimodel, cmdmodel: cmdmodel, el: '.toolbar'});

resizeLogview();
$(window).resize(resizeLogview);

cmdmodel.on('change', function(model) {
  wscommand(model);
});


// visual effects
$('.select2-choice').hover(
  function () {$(this).find('div b').addClass('hovered');},
  function () {$(this).find('div b').removeClass('hovered');}
);


// shortcuts:
//   ctrl+l - clear screen (major conflict with 'go to addressbar')
//   ctrl+= - increase font size (logview div only)
//   ctrl+- - decrease font size (logview div only)
//   ret    - mark current time
jwerty.key('ctrl+l', logviewer.clear);
jwerty.key('q', function () {
  if (isInputFocused()) { return true; }
  fileselectview.$el.select2('open');
  return false;
});

jwerty.key('w', function () {
  if (isInputFocused()) { return true; }
  modeselectview.$el.select2('open');
  return false;
});

jwerty.key('e', function () {
  if (isInputFocused()) { return true; }
  scriptview.$el.focus();
  return false;
});