
var UiModel = Backbone.Model.extend({
    defaults: {
        'panel-hidden': false,
        'tail-lines': false,
        'files': [],

        // Logview tunables.
        'wrap-lines': false,
        'history-lines': 2000,   // Use this.history_lines = 0 for infinite history.

        // Changing the following will re-execute the tail command on the backend.
        'mode': null,     // The current command (e.g. tail, tail+awk, tail+grep).
        'file': null,
        'script': null,   // The script to pass to commands that accept script input.
        'tail-lines': 60  // i.e. tail -n ${tail-lines}.
    },

    initialize: function(options) {
        this.backend = options.backend;
        this.on('change:panel-hidden', function(model) {
            if (model.get('panel-hidden')) {
                toolbar_height = 0;
            } else {
                toolbar_height = $('.toolbar').outerHeight(true);
            }
        });

        // Set mode to first mode in the select list.
        var _first_mode = $('#modeselect > select')[0].options[0].value;
        this.set({'mode': _first_mode});

        // Setting the default file is done in FileSelectView
        this.updateFiles();

        this.on('change:file change:mode change:script', function(model) {
            var path = model.get('file');
            var mode = model.get('mode');
            var script = model.get('script');

            if (path === null || path === '') {
                return;
            }

            if (mode !== 'tail' && script === null) {
                console.warn('tail with script input');
                return;
            }

            this.backend.sendMessage({
                'mode': mode,
                'path': path,
                'script': script,
                'tail-lines': model.get('tail-lines')
            }, true);

            dispatcher.trigger('clear-logview');
        });

    },

    updateFiles: function() {
        var self = this;
        $.ajax({
            url: 'files', type: 'GET', async: false,
            success: function(result) { self.set({'files': result}); }
        });
    }
});


//----------------------------------------------------------------------------
// Views.
//----------------------------------------------------------------------------

var PanelView = Backbone.View.extend({
    initialize: function(options) {
        _.bindAll(this, 'updateHrefs', 'hideShowPanel');
        this.model.on('change:panel-hidden', this.hideShowPanel);
        this.model.on('change:file', this.updateHrefs);

        this.$downloadA = this.$el.find('.toolbar-item .button-group .action-download');
    },

    events: {
        'click .toolbar-item .button-group .action-hide-toolbar':  function() {
            this.model.set({'panel-hidden': true});
        },
        'click .toolbar-item .button-group .action-clear-logview': function() {
            dispatcher.trigger('clear-logview');
        },
        'click .toolbar-item .button-group .action-configure': function() {
            $('#configuration').toggle();
            $('.toolbar-item .button-group .action-configure').toggleClass('selected');
        }
    },

    // Update the download link whenever the selected file changes.
    updateHrefs: function() {
        this.$downloadA.attr('href', 'fetch/' + this.model.get('file'));
    },

    hideShowPanel: function() {
        if (this.model.get('panel-hidden')) {
            this.$el.slideUp('fast');
        } else {
            this.$el.show();
        }
    },
});


var FileSelectView = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, 'updateSelect', 'listFilesSuccess');
        this.render();
        this.updateSelect();

        // Set the file to the first option in the select element.
        var _first_value = Object.keys(this.select.options)[0];
        this.model.set({'file': _first_value});
        this.select.setValue(_first_value);

        // If there are directories in config['files'], we need to refresh
        // the file list every time the select item is focused.
        if (window.client_config['refresh_filelist']) {
            this.select.on('focus', this.updateSelect);
        }
    },

    events: {
        'change': function(event) {
            this.model.set({'file': event.target.value});
        }
    },

    listFilesSuccess: function(result) {
        var multiple_groups = (result.length > 1);
        var groups = Object.keys(result);

        for (var i=0; i<groups.length; i++) {
            var group_name = groups[i];
            this.select.addOptionGroup(group_name, {
                'value': group_name,
                'label': group_name
            });

            for (var j=0; j<result[group_name].length; j++) {
                this.select.addOption({
                    value: result[group_name][j][0],
                    text:  result[group_name][j][0],
                    size:  result[group_name][j][1],
                    mtime: result[group_name][j][2],
                    group: multiple_groups ? group_name : null
                });
            }
        }
    },

    updateSelect: function() {
        this.select.clearOptions();
        this.select.clearOptionGroups();

        $.ajax({
            url: 'files',
            type: 'GET',
            async: false,
            success: this.listFilesSuccess
        });
    },

    render: function() {
        this.select = this.$el.selectize({
            highlight: false,
            selectOnTab: true,
            optgroupField: 'group'
        })[0].selectize;
    }
});


var ModeSelectView = Backbone.View.extend({
    initialize: function() {
        this.$el.val(this.model.get('mode'));
        this.render();
    },

    events: {
        'change': 'modeChange'
    },

    modeChange: function(event) {
        this.model.set({'mode': event.target.value, 'script': null});
    },

    render: function() {
        this.$el.selectize();
    }
});


var ScriptView = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, 'renderMode');
        this.model.on('change:mode', this.renderMode);
        this.render();
    },

    events: {
        'change': function() {
            var mode  = this.model.get('mode');
            var value = this.$el.val();

            // Pressing enter in an empty input field will use the placeholder value.
            if (value === "" && mode in this._placeholders) {
                value = this._placeholders[mode];
            }

            this.model.set({'script': value});
        },
    },

    _placeholders: {
        'awk': '{print $0; fflush()}',
        'sed': 's|.*|&,',
        'grep': '.*'
    },

    renderMode: function(model) {
        var mode = model.get('mode');
        var el = this.$el;

        if (mode in this._placeholders) {
            el.removeAttr('disabled');
            el.val('');
            el.attr('placeholder', this._placeholders[mode]);
        } else {
            el.attr('disabled', 'disabled');
            el.val('');
            el.attr('placeholder', 'mode "' + mode + '" does not accept any input');
        }

        return this;
    },

    render: function() {
        return this;
    }
});


var ConfigurationView = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, 'render', 'toggleWrapLines');
        this.render();
    },

    events: {
        'click #wrap_lines': 'toggleWrapLines'
    },

    toggleWrapLines: function(event) {
        this.model.set({'wrap-lines': event.target.checked});
    },

    render: function() {
        var view = this;
        var watch_options = {
            wait: 500,
            highlight: true,
            captureLength: 1,
            callback: function (value) {
                switch (this.id) {
                    case 'history_lines':
                        view.model.set({'history-lines': parseInt(value)});
                        break;
                    case 'tail_lines':
                        view.model.set({'tail-lines': parseInt(value)});
                        break;
                }
            }
        };

        // Send input event only after user has finished typing.
        $("#history_lines").typeWatch(watch_options);
        $("#tail_lines").typeWatch(watch_options);

        // Set the configuration inputs to the model defaults.
        $('#history_lines')[0].value = this.model.get('history-lines');
        $('#tail_lines')[0].value = this.model.get('tail-lines');
        $('#wrap_lines').prop('checked', this.model.get('wrap-lines'));
    }
});


var QuickbarView = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, 'toggleQuickbar');
        this.model.on('change:panel-hidden', this.toggleQuickbar);
    },

    events: {
        'click .action-show-toolbar': function() {
            this.model.set({'panel-hidden': false});
        }
    },

    toggleQuickbar: function() {
        if (this.model.get('panel-hidden')) {
            this.$el.removeClass('hidden');
        } else {
            this.$el.addClass('hidden');
        }
    },
});


var LogView = Backbone.View.extend({
    initialize: function(options) {
        this.backend = options.backend;
        this.container = $(options.el);
        this.container_dom = this.container.get()[0];
        this.container_parent_dom = this.container_dom.parentElement;

        this.log_entry_class  = options['log_entry_class']  || 'log-entry';
        this.log_notice_class = options['log_notice_class'] || 'log-entry log-notice';

        this.history = [];
        this.auto_scroll = true;
        this.last_span = null;
        this.last_span_classes = '';

        _.bindAll(this,
            'createSpans', 'writeSpans', 'trimHistory', 'createLogEntrySpan',
            'createLogNoticeSpan', 'scroll', 'isAtBottom', 'clearLines',
            'toggleWrapLines'
        );

        this.backend.on('change:last-message', this.createSpans);
        this.model.on('change:wrap-lines', this.toggleWrapLines);

        dispatcher.on('new-message',   this.createSpans);
        dispatcher.on('clear-logview', this.clearLines);

        // Set line-wrapping to the default defined in the client config.
        this.model.set({'wrap-lines': window.client_config['wrap-lines-initial']});
        $('#wrap_lines').prop('checked', this.model.get('wrap-lines'));
    },

    toggleWrapLines: function(model) {
        this.container.toggleClass('log-view-wrapped', model.get('wrap-lines'));
    },

    createSpan: function(inner_html, class_names) {
        var span = document.createElement('span');
        span.innerHTML = inner_html;
        span.className = class_names;
        return span
    },

    createLogEntrySpan: function(inner_html) {
        return this.createSpan(inner_html, this.log_entry_class);
    },

    createLogNoticeSpan: function(inner_html) {
        return this.createSpan(inner_html, this.log_notice_class);
    },

    writeSpans: function(spans) {
        if (spans.length === 0) {
            return;
        }

        var scroll_after_write = this.isAtBottom();
        var fragment = document.createDocumentFragment();

        // Create spans from all elements and add them to a temporary dom.
        for (var i=0; i<spans.length; i++) {
            var span = spans[i];
            this.history.push(span);
            fragment.appendChild(span);
        }

        this.container_dom.appendChild(fragment);
        this.trimHistory();
        fragment.innerHTML = '';

        if (this.auto_scroll && scroll_after_write) {
            this.scroll();
        }

        if (this.last_span) {
            this.last_span.className = this.last_span_classes;
        }

        this.last_span = this.history[this.history.length-1];
        this.last_span_classes = this.last_span.className;
        this.last_span.className = this.last_span_classes + ' log-entry-current';
    },

    createSpans: function(message) {
        var spans = [];
        var logNotice = this.createLogNoticeSpan;
        var logEntry  = this.createLogEntrySpan;

        if ('err' in message) {
            if (message['err'] === 'truncated') {
                var now = window.moment().format();
                var line = now + ' - ' + message['fn'] + ' - truncated';
                spans.push(logNotice(line));
            } else {
                for (var i=0; i<message['err'].length; i++) {
                    var line = message['err'][i];
                    spans.push(logNotice(line));
                }
            }
        } else {
            $.each(message, function (fn, payload) {
                for (var i=0; i<payload.length; i++) {
                    var line = escapeHtml(payload[i]);
                    line = line.replace(/\n$/, '');
                    spans.push(logEntry(line));
                }
            });
        }

        this.writeSpans(spans);
    },

    clearLines: function() {
        this.container_dom.innerHTML = '';
        this.history = [];
        this.last_span = null;
    },

    resize: function() {
        var toolbar_height = this.ui_model.get('toolbar_height');
        this.container.height(window.innerHeight - toolbar_height);
    },

    scroll: function() {
        this.container_parent_dom.scrollTop = this.container_parent_dom.scrollHeight;
    },

    trimHistory: function() {
        var history_lines = this.model.get('history-lines');
        if (history_lines !== 0 && this.history.length > history_lines) {
            for (var i = 0; i < (this.history.length - history_lines); i++) {
                this.container_dom.removeChild(this.history.shift());
            }
        }
    },

    isAtBottom: function () {
        var auto_scroll_offset = this.container_parent_dom.scrollTop -
            (this.container_parent_dom.scrollHeight - this.container_parent_dom.offsetHeight);
        return Math.abs(auto_scroll_offset) < 50;
    }
});
