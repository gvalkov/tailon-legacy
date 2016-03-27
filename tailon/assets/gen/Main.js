var LogView = (function () {
    function LogView(backend, settings, container, logEntryClass, logNoticeClass) {
        this.backend = backend;
        this.settings = settings;
        this.container = container;
        this.logEntryClass = logEntryClass;
        this.logNoticeClass = logNoticeClass;
        this.$container = $(container);
        this.containerParent = container.parentElement;
        this.history = [];
        this.autoScroll = true;
        this.lastSpan = null;
        this.lastSpanClasses = '';
    }
    LogView.prototype.toggleWrapLines = function () {
        this.$container.toggleClass('log-view-wrapped', this.settings.get('wrapLines'));
    };
    LogView.prototype.createSpan = function (inner_html, class_names) {
        var span = document.createElement('span');
        span.innerHTML = inner_html;
        span.className = class_names;
        return span;
    };
    LogView.prototype.createLogEntrySpan = function (inner_html) {
        return this.createSpan(inner_html, this.logEntryClass);
    };
    LogView.prototype.createLogNoticeSpan = function (inner_html) {
        return this.createSpan(inner_html, this.logNoticeClass);
    };
    LogView.prototype.writeSpans = function (spans) {
        if (spans.length === 0) {
            return;
        }
        var scrollAfterWrite = this.isAtBottom();
        var fragment = document.createDocumentFragment();
        // Create spans from all elements and add them to a temporary DOM.
        for (var i = 0; i < spans.length; i++) {
            var span = spans[i];
            this.history.push(span);
            fragment.appendChild(span);
        }
        this.container.appendChild(fragment);
        this.trimHistory();
        fragment.innerHTML = '';
        if (this.autoScroll && scrollAfterWrite) {
            this.scroll();
        }
        if (this.lastSpan) {
            this.lastSpan.className = this.lastSpanClasses;
        }
        this.lastSpan = this.history[this.history.length - 1];
        this.lastSpanClasses = this.lastSpan.className;
        this.lastSpan.className = this.lastSpanClasses + ' log-entry-current';
    };
    LogView.prototype.createSpans = function (message) {
        var spans = [];
        // Just a list of lines that we write to the logview.
        if (Array.isArray(message)) {
            for (var i = 0; i < message.length; i++) {
                var line = Utils.escapeHtml(message[i]);
                line = line.replace(/\n$/, '');
                spans.push(this.createLogEntrySpan(line));
            }
        }
        else if ('err' in message) {
            for (var i = 0; i < message['err'].length; i++) {
                var line_1 = message['err'][i];
                spans.push(this.createLogNoticeSpan(line_1));
            }
        }
        else {
            $.each(message, function (fn, payload) {
                for (var i = 0; i < payload.length; i++) {
                    var line = Utils.escapeHtml(payload[i]);
                    line = line.replace(/\n$/, '');
                    spans.push(this.createLogEntrySpan(line));
                }
            });
        }
        this.writeSpans(spans);
    };
    LogView.prototype.clearLines = function () {
        this.container.innerHTML = '';
        this.history = [];
        this.lastSpan = null;
    };
    LogView.prototype.resize = function () {
        var toolbarHeight = this.settings.get('toolbarHeight');
        this.$container.height(window.innerHeight - toolbarHeight);
    };
    LogView.prototype.scroll = function () {
        this.containerParent.scrollTop = this.containerParent.scrollHeight;
    };
    LogView.prototype.trimHistory = function () {
        var linesOfHistory = this.settings.get('linesOfHistory');
        if (linesOfHistory !== 0 && this.history.length > linesOfHistory) {
            for (var i = 0; i < (this.history.length - linesOfHistory + 1); i++) {
                this.container.removeChild(this.history.shift());
            }
        }
    };
    LogView.prototype.isAtBottom = function () {
        var autoScrollOffset = this.containerParent.scrollTop -
            (this.containerParent.scrollHeight - this.containerParent.offsetHeight);
        return Math.abs(autoScrollOffset) < 50;
    };
    return LogView;
}());
// var LogView = Backbone.View.extend({
//     initialize: function(options) {
//         this.backend = options.backend;
//         this.container = $(options.el);
//         this.container_dom = this.container.get()[0];
//         this.containerParent = this.container_dom.parentElement;
//         this.log_entry_class  = options['log_entry_class']  || 'log-entry';
//         this.log_notice_class = options['log_notice_class'] || 'log-entry log-notice';
//         this.history = [];
//         this.autoScroll = true;
//         this.lastSpan = null;
//         this.lastSpanClasses = '';
//         _.bindAll(this,
//             'createSpans', 'writeSpans', 'trimHistory', 'createLogEntrySpan',
//             'createLogNoticeSpan', 'scroll', 'isAtBottom', 'clearLines',
//             'toggleWrapLines'
//         );
//         this.backend.on('change:last-message', this.createSpans);
//         this.model.on('change:wrap-lines', this.toggleWrapLines);
//         dispatcher.on('new-message',   this.createSpans);
//         dispatcher.on('clear-logview', this.clearLines);
//         // Set line-wrapping to the default defined in the client config.
//         this.model.set({'wrap-lines': window.client_config['wrap-lines-initial']});
//         $('#wrap_lines').prop('checked', this.model.get('wrap-lines'));
//     },
// });
var Utils;
(function (Utils) {
    function formatBytes(size) {
        var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = 0;
        while (size >= 1024) {
            size /= 1024;
            ++i;
        }
        return size.toFixed(1) + ' ' + units[i];
    }
    Utils.formatBytes = formatBytes;
    function formatFilename(state) {
        if (!state.id)
            return state.text;
        var size = formatBytes($(state.element).data('size'));
        return '<span>' + state.text + '</span>' + '<span style="float:right;">' + size + '</span>';
    }
    Utils.formatFilename = formatFilename;
    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    Utils.endsWith = endsWith;
    function startsWith(str, prefix) {
        return str.indexOf(prefix) === 0;
    }
    Utils.startsWith = startsWith;
    var escape_entity_map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "/": '&#x2F;'
    };
    // This is the escapeHtml function from mustache.js.
    function escapeHtml(str) {
        return String(str).replace(/[&<>\/]/g, function (s) {
            return escape_entity_map[s];
        });
    }
    Utils.escapeHtml = escapeHtml;
    var Signal = (function () {
        function Signal() {
            this.listeners = [];
        }
        Signal.prototype.addCallback = function (callback) {
            this.listeners.push(callback);
        };
        Signal.prototype.removeObserver = function (observer) {
            this.listeners.splice(this.listeners.indexOf(observer), 1);
        };
        Signal.prototype.trigger = function (data) {
            this.listeners.forEach(function (callback) {
                callback(data);
            });
        };
        return Signal;
    }());
    Utils.Signal = Signal;
})(Utils || (Utils = {}));
/// <reference path="Utils.ts" />
var Settings;
(function (Settings_1) {
    var Settings = (function () {
        function Settings(settings) {
            this.settings = settings;
            this.signals = {};
            var keys = Object.keys(this.settings);
            for (var i = 0; i < keys.length; i++) {
                this.signals[keys[i]] = new Utils.Signal();
            }
        }
        Settings.prototype.onChange = function (name, callback) {
            this.signals[name].addCallback(callback);
        };
        Settings.prototype.set = function (key, value) {
            console.log('settings key "' + key + '" set to "' + value + '"');
            this.settings[key] = value;
            this.signals[key].trigger(value);
        };
        Settings.prototype.get = function (key) {
            return this.settings[key];
        };
        return Settings;
    }());
    Settings_1.Settings = Settings;
})(Settings || (Settings = {}));
var TailonServer = (function () {
    function TailonServer(apiURL, connectionRetries) {
        var _this = this;
        this.apiURL = apiURL;
        this.connectionRetries = connectionRetries;
        this.connectionMade = function () {
            console.log('connected to backend');
            _this.connected = true;
            _this.socket.onmessage = _this.dataReceived;
            _this.onConnect.trigger();
        };
        this.connectionLost = function () {
            _this.onDisconnect.trigger();
            if (_this.connected) {
                _this.connected = false;
                return;
            }
            _this.connected = false;
            if (_this.connectionRetries === 0) {
                return;
            }
            window.setTimeout(function () {
                this.connectionRetries -= 1;
                this.connect();
            }, 1000);
        };
        this.dataReceived = function (message) {
            var data = JSON.parse(message.data);
            _this.onMessage.trigger(data);
        };
        this.sendMessage = function (message, retry) {
            var connected = _this.connected;
            var socket = _this.socket;
            if (retry) {
                (function () {
                    if (connected) {
                        socket.send(JSON.stringify(message));
                    }
                    else {
                        window.setTimeout(arguments.callee, 20);
                    }
                })();
            }
            else {
                if (!connected && !retry) {
                    return;
                }
                socket.send(JSON.stringify(message));
            }
        };
        this.connected = false;
        this.onConnect = new Utils.Signal();
        this.onDisconnect = new Utils.Signal();
        this.onMessage = new Utils.Signal();
    }
    TailonServer.prototype.connect = function () {
        this.socket = new SockJS(this.apiURL);
        this.socket.onopen = this.connectionMade;
        this.socket.onclose = this.connectionLost;
    };
    return TailonServer;
}());
// global $:false, jQuery:false
// jshint laxcomma: true, sub: true
/// <reference path="../vendor/typings/jquery.d.ts" />
/// <reference path="../vendor/typings/sockjs.d.ts" />
/// <reference path="../vendor/typings/moment.d.ts" />
/// <reference path="../vendor/typings/spin.d.ts" />
/// <reference path="../vendor/typings/selectize.d.ts" />
/// <reference path="Utils.ts" />
/// <reference path="Backend.ts" />
/// <reference path="Logview.ts" />
/// <reference path="Settings.ts" />
var settings = new Settings.Settings({
    toolbarHeight: 10,
    panelHidden: false,
    // Logview tunables.
    wrapLines: false,
    linesOfHistory: 2000,
    linesToTail: 30,
    currentCommand: null,
    currentFile: null,
    currentScript: null,
    previousBackendMessage: null
});
$('#history-lines').val(settings.get('linesOfHistory'));
$('#tail-lines').val(settings.get('linesToTail'));
var apiURL = Utils.endsWith(window.relativeRoot, '/') ? 'ws' : '/ws';
var apiURL = [window.location.protocol, '//', window.location.host, window.relativeRoot, apiURL].join('');
var spinner = new Spinner();
var backend = new TailonServer(apiURL, 10);
var logview = new LogView(backend, settings, document.getElementById('logviewer'), 'log-entry', 'log-entry log-notice');
//----------------------------------------------------------------------------
// Show spinner while connecting to the backend.
spinner.spin();
document.body.appendChild(spinner.el);
backend.onConnect.addCallback(function () {
    spinner.stop();
});
backend.onDisconnect.addCallback(function () {
    spinner = new Spinner();
    spinner.spin();
    document.body.appendChild(spinner.el);
});
backend.connect();
backend.onMessage.addCallback(function (message) {
    logview.createSpans(message);
});
//-----------------------------------------------------------------------------
// Configuration
$('#action-show-settings a').click(function () {
    $('#configuration').toggle();
});
var watch_options = {
    wait: 500,
    highlight: true,
    captureLength: 1,
    callback: function (value) {
        switch (this.id) {
            case 'history-lines':
                settings.set('linesOfHistory', parseInt(value));
                break;
            case 'tail-lines':
                settings.set('linesToTail', parseInt(value));
                break;
        }
    }
};
$('#history-lines').typeWatch(watch_options);
$('#tail-lines').typeWatch(watch_options);
$('#wrap-lines').click(function () {
    settings.set('wrapLines', this.checked);
});
settings.onChange('linesOfHistory', function (lines) {
    logview.trimHistory();
});
settings.onChange('wrapLines', function (value) {
    logview.toggleWrapLines();
});
function onResize() {
    var newSize = $(window).height() - $('#toolbar').outerHeight();
    console.log(newSize);
    $('.scrollable').height(newSize);
}
// // TODO: rate-limit this callback.
$(window).resize(onResize);
onResize();
var FileSelect = (function () {
    function FileSelect(selector) {
        var _this = this;
        this.refreshSelect = function () {
            var updateValues = _this.updateValues;
            var select = _this.select;
            function check(result) {
                if (result) {
                    var currentFile = settings.get('currentFile');
                    updateValues();
                    select.setValue(currentFile);
                }
            }
            ;
            $.ajax({
                url: 'files/check', type: 'GET', async: false,
                success: check
            });
        };
        this.updateValues = function () {
            _this.select.clearOptions();
            _this.select.clearOptionGroups();
            $.ajax({
                url: 'files', type: 'GET', async: false,
                success: _this.listFilesSuccess
            });
        };
        this.listFilesSuccess = function (result) {
            var multiple_groups = (result.length > 1);
            var groups = Object.keys(result);
            for (var i = 0; i < groups.length; i++) {
                var group_name = groups[i];
                _this.select.addOptionGroup(group_name, {
                    'value': group_name,
                    'label': group_name
                });
                for (var j = 0; j < result[group_name].length; j++) {
                    _this.select.addOption({
                        value: result[group_name][j][0],
                        text: result[group_name][j][0],
                        size: result[group_name][j][1],
                        mtime: result[group_name][j][2],
                        group: multiple_groups ? group_name : null
                    });
                }
            }
        };
        this.$container = $(selector);
        this.select = this.$container.selectize({
            maxItems: 1,
            highlight: false,
            selectOnTab: true,
            optgroupField: 'group'
        })[0].selectize;
        this.updateValues();
        var firstValue = Object.keys(this.select.options)[0];
        this.select.setValue(firstValue);
        settings.set('currentFile', firstValue);
        // TODO: This is an ugly work around for not being able to figure out
        // how the selectize focus event works.
        // this.select.on('focus', this.onFocus);
        $(this.$container.parent()).find('.selectize-input').hover(this.refreshSelect, function () { return; });
        this.select.on('change', this.onChange);
    }
    FileSelect.prototype.onChange = function (value) {
        settings.set('currentFile', value);
    };
    return FileSelect;
}());
var CommandSelect = (function () {
    function CommandSelect(selector) {
        this.$container = $(selector);
        var all_commands = window.clientConfig['commands'];
        all_commands = all_commands.map(function (x) {
            return { item: x };
        });
        this.select = this.$container.selectize({
            persist: false,
            options: all_commands,
            maxItems: 1,
            labelField: 'item',
            valueField: 'item'
        })[0].selectize;
        var firstValue = Object.keys(this.select.options)[0];
        this.select.setValue(firstValue);
        settings.set('currentCommand', firstValue);
        this.select.on('change', this.onChange);
    }
    CommandSelect.prototype.onChange = function (value) {
        console.log(this);
        settings.set('currentCommand', value);
        settings.set('currentScript', null);
    };
    return CommandSelect;
}());
var ActionBar = (function () {
    function ActionBar(selector) {
        this.$container = $(selector);
        this.$downloadA = this.$container.find('.action-download');
        settings.onChange('currentFile', function (value) {
            action_bar.updateDownloadLink(value);
        });
        settings.onChange('panelHidden', function (value) {
            if (value) {
                $('#toolbar').slideUp('fast');
                $('#minimized-action-bar').removeClass('hidden');
            }
            else {
                $('#minimized-action-bar').addClass('hidden');
                $('#toolbar').show();
            }
        });
        this.$container.find('.action-hide-toolbar').on('click', function () {
            settings.set('panelHidden', true);
        });
        this.$container.find('.action-clear-logview').on('click', function () {
            logview.clearLines();
        });
        this.$container.find('.action-configure').on('click', function () {
            $('#configuration').toggle();
            $(this).toggleClass('selected');
        });
    }
    ActionBar.prototype.updateDownloadLink = function (file) {
        this.$downloadA.attr('href', 'fetch/' + file);
    };
    return ActionBar;
}());
var MinimizedActionBar = (function () {
    function MinimizedActionBar(selector) {
        this.$container = $(selector);
        this.$container.on('click', function () {
            settings.set('panelHidden', false);
        });
        this.$container.find('.action-configure').on('click', function () {
            $('#configuration').toggle();
            $(this).toggleClass('selected');
        });
    }
    return MinimizedActionBar;
}());
var ScriptInput = (function () {
    function ScriptInput(selector) {
        var _this = this;
        this.onCommandChange = function (command) {
            if (command in _this.placeholders) {
                var placeholder = _this.placeholders[command];
                _this.$input_el.removeAttr('disabled');
                _this.$input_el.val('');
                _this.$input_el.attr('placeholder', placeholder);
                settings.set('currentScript', placeholder);
            }
            else {
                _this.$input_el.attr('disabled', 'disabled');
                _this.$input_el.val('');
                _this.$input_el.attr('placeholder', 'command "' + command + '" does not accept any input');
                settings.set('currentScript', null);
            }
        };
        this.onChange = function (event) {
            var value = event.target.value;
            var command = settings.get('currentCommand');
            // Pressing enter in an empty input field uses the placeholder value.
            if (value === '' && command in _this.placeholders) {
                value = _this.placeholders[command];
            }
            settings.set('currentScript', value);
        };
        this.$container = $(selector);
        this.$input_el = $('#script-input input');
        this.placeholders = {
            'awk': '{print $0; fflush()}',
            'sed': 's/.*/&/',
            'grep': '.*'
        };
        this.onCommandChange(settings.get('currentCommand'));
        this.$container.on('change', this.onChange);
        settings.onChange('currentCommand', this.onCommandChange.bind(this));
    }
    return ScriptInput;
}());
function changeFileModeScript() {
    var path = settings.get('currentFile');
    var command = settings.get('currentCommand');
    var script = settings.get('currentScript');
    if (path === null || path === '') {
        return;
    }
    if (command !== 'tail' && script === null) {
        console.warn('tail with script input');
        return;
    }
    var prev_message = settings.get('previousBackendMessage');
    var message = {
        'command': command,
        'path': path,
        'script': script,
        'tail-lines': settings.get('linesToTail')
    };
    // Don't do anything if the current message is the same as the
    // previous message.
    if (prev_message !== null) {
        var message_equal = 1;
        Object.keys(message).forEach(function (key, index) {
            var eq = (prev_message[key] === message[key]);
            message_equal = message_equal & Number(eq);
        });
        if (message_equal === 1) {
            return;
        }
    }
    settings.set('previousBackendMessage', message);
    console.log('Sending message: ' + JSON.stringify(message));
    backend.sendMessage(message, true);
    logview.clearLines();
}
if (window.clientConfig['tool'] === 'tailon') {
    var m_action_bar = new MinimizedActionBar('#minimized-action-bar');
    var action_bar = new ActionBar('#action-bar');
    var cmd_select = new CommandSelect('#command-select select');
    var file_select = new FileSelect('#file-select select');
    var script_input = new ScriptInput('#script-input');
    settings.onChange('currentFile', changeFileModeScript);
    settings.onChange('currentCommand', changeFileModeScript);
    settings.onChange('currentScript', changeFileModeScript);
    // Start showing the first file as soon as we're connected.
    backend.onConnect.addCallback(changeFileModeScript);
}
//# sourceMappingURL=Main.js.map