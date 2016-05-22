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

interface Window {
    relativeRoot: string;
    clientConfig: any;
}

interface JQuery {
    typeWatch(): JQuery;
    typeWatch(settings: Object): JQuery;
}

let settings = new Settings.Settings({
    toolbarHeight: 10,

    panelHidden: false,

    // Logview tunables.
    wrapLines: false,
    linesOfHistory: 2000,  // 0 for infinite history.
    linesToTail: window.clientConfig['tail-lines-initial'],  // i.e. tail -n $linesToTail.

    currentCommand: null,
    currentFile: null,
    currentScript: null,

    previousBackendMessage: null
});

$('#history-lines').val(settings.get('linesOfHistory'));
$('#tail-lines').val(settings.get('linesToTail'));

var apiURL = Utils.endsWith(window.relativeRoot, '/') ? 'ws' : '/ws';
var apiURL = [window.location.protocol, '//', window.location.host, window.relativeRoot, apiURL].join('');

let spinner  = new Spinner()

const backend = new TailonServer(apiURL, 10);
const logview = new LogView(
    backend, settings,
    document.getElementById('logviewer'),
    'log-entry',
    'log-entry log-notice'
)


//----------------------------------------------------------------------------
// Show spinner while connecting to the backend.
spinner.spin();
document.body.appendChild(spinner.el);

backend.onConnect.addCallback(function() {
    spinner.stop();
});

backend.onDisconnect.addCallback(function() {
    spinner = new Spinner();
    spinner.spin();
    document.body.appendChild(spinner.el);
})

backend.connect();

backend.onMessage.addCallback(function(message) {
    logview.createSpans(message)
});


//-----------------------------------------------------------------------------
// Configuration
$('#action-show-settings a').click(function() {
    $('#configuration').toggle();
});

var watch_options = {
    wait: 500,
    highlight: true,
    captureLength: 1,
    callback: function (value) {
        switch (this.id) {
        case 'history-lines':
            settings.set<number>('linesOfHistory', parseInt(value));
            break;
        case 'tail-lines':
            settings.set<number>('linesToTail', parseInt(value));
            break;
        }
    }
};

$('#history-lines').typeWatch(watch_options);
$('#tail-lines').typeWatch(watch_options);

$('#wrap-lines').click(function() {
    settings.set<boolean>('wrapLines', this.checked);
});

settings.onChange('linesOfHistory', function(lines) {
    logview.trimHistory();
});

settings.onChange('wrapLines', function(value) {
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


class FileSelect {
    $container: JQuery;
    select: any;
    lastListing: Object;

    constructor(selector: string) {
        this.$container = $(selector);
        this.select = this.$container.selectize({
            maxItems: 1,
            highlight: false,
            selectOnTab: true,
            optgroupField: 'group',
        })[0].selectize;

        this.updateValues();
        var firstValue = Object.keys(this.select.options)[0];
        this.select.setValue(firstValue);
        settings.set<string>('currentFile', firstValue);

        // TODO: This is an ugly work around for not being able to figure out
        // how the selectize focus event works.
        // this.select.on('focus', this.onFocus);
        $(this.$container.parent()).find('.selectize-input').hover(
            this.refreshSelect,
            function() {return}
        );

        this.select.on('change', this.onChange);
    }

    onChange(value) {
        settings.set<string>('currentFile', value);
    }

    refreshSelect= () => {
        var updateValues = this.updateValues;
        var select = this.select;
        function check(result) {
            if (result) {
                var currentFile = settings.get<string>('currentFile');
                updateValues();
                select.setValue(currentFile);
            }
        };

        $.ajax({
            url: 'files/check', type: 'GET', async: false,
            success: check,
        });
    }

    updateValues= () => {
        this.select.clearOptions();
        this.select.clearOptionGroups();

        $.ajax({
            url: 'files', type: 'GET', async: false,
            success: this.listFilesSuccess
        });
    }

    listFilesSuccess= (result) =>  {
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
    }
}

class CommandSelect {
    $container: JQuery;
    select: any;

    constructor(selector: string) {
        this.$container = $(selector);

        let all_commands = window.clientConfig['commands'];
        all_commands = all_commands.map(function(x) {
            return {item: x};
        });

        this.select = this.$container.selectize({
            persist: false,
            options: all_commands,
            maxItems: 1,
            labelField: 'item',
            valueField: 'item',
        })[0].selectize;

        var firstValue = Object.keys(this.select.options)[0];
        this.select.setValue(firstValue);
        settings.set<string>('currentCommand', firstValue);
        this.select.on('change', this.onChange);
    }

    onChange(value) {
        console.log(this);
        settings.set<string>('currentCommand', value);
        settings.set<string>('currentScript', null);
    }
}

class ActionBar {
    $container: JQuery;
    $downloadA: JQuery;

    constructor(selector: string) {
        this.$container = $(selector);
        this.$downloadA = this.$container.find('.action-download');

        settings.onChange('currentFile', function(value) {
            action_bar.updateDownloadLink(value);
        });

        settings.onChange('panelHidden', function(value) {
            if (value) {
                $('#toolbar').slideUp('fast');
                $('#minimized-action-bar').removeClass('hidden');
            } else {
                $('#minimized-action-bar').addClass('hidden');
                $('#toolbar').show();
            }
        });

        this.$container.find('.action-hide-toolbar').on('click', function() {
            settings.set<boolean>('panelHidden', true);
        });

        this.$container.find('.action-clear-logview').on('click', function() {
            logview.clearLines();
        });

        this.$container.find('.action-configure').on('click', function() {
            $('#configuration').toggle();
            $(this).toggleClass('selected');
        });
    }

    updateDownloadLink(file: string) {
        this.$downloadA.attr('href', 'fetch/' + file);
    }
}

class MinimizedActionBar {
    $container: JQuery;

    constructor(selector: string) {
        this.$container = $(selector);

        this.$container.on('click', function() {
            settings.set<boolean>('panelHidden', false);
        });

        this.$container.find('.action-configure').on('click', function() {
            $('#configuration').toggle();
            $(this).toggleClass('selected');
        });
    }
}

class ScriptInput {
    $container: JQuery;
    $input_el: JQuery;
    placeholders: Object;

    constructor(selector: string) {
        this.$container = $(selector);
        this.$input_el = $('#script-input input');
        this.placeholders = {
            'awk': '{print $0; fflush()}',
            'sed': 's/.*/&/',
            'grep': '.*'
        }

        this.onCommandChange(settings.get('currentCommand'));
        this.$container.on('change', this.onChange);
        settings.onChange('currentCommand', this.onCommandChange.bind(this));
    }

    onCommandChange= (command) => {
        if (command in this.placeholders) {
            var placeholder = this.placeholders[command];
            this.$input_el.removeAttr('disabled');
            this.$input_el.val('');
            this.$input_el.attr('placeholder', placeholder);
            settings.set('currentScript', placeholder);
        } else {
            this.$input_el.attr('disabled', 'disabled');
            this.$input_el.val('');
            this.$input_el.attr(
                'placeholder',
                'command "' + command + '" does not accept any input'
            );
            settings.set('currentScript', null);
        }
    }

    onChange= (event) => {
        var value = event.target.value;
        var command = settings.get<string>('currentCommand');

        // Pressing enter in an empty input field uses the placeholder value.
        if (value === '' && command in this.placeholders) {
            value = this.placeholders[command];
        }

        settings.set<string>('currentScript', value);
    }
}

function changeFileModeScript() {
    var path = settings.get<string>('currentFile');
    var command = settings.get<string>('currentCommand');
    var script =  settings.get<string>('currentScript');

    if (path === null || path === '') {
        return;
    }

    if (command !== 'tail' && script === null) {
        console.warn('tail with script input');
        return;
    }

    var prev_message = settings.get<Object>('previousBackendMessage');
    var message = {
        'command': command,
        'path': path,
        'script': script,
        'tail-lines': settings.get<number>('linesToTail')
    };

    // Don't do anything if the current message is the same as the
    // previous message.
    if (prev_message !== null) {
        var message_equal = 1;

        Object.keys(message).forEach(function(key, index) {
            var eq = (prev_message[key] === message[key]);
            message_equal = message_equal & Number(eq);
        });

        if (message_equal === 1) {
            return;
        }
    }

    settings.set<Object>('previousBackendMessage', message);
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
