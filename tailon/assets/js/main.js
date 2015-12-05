// global $:false, jQuery:false
// jshint laxcomma: true, sub: true

var ws_path = endsWith(window.relativeRoot, '/') ? 'ws' : '/ws';
var ws_url  = [window.location.protocol, '//', window.location.host, window.relativeRoot, ws_path].join('');

// models
var backend  = new TailonServer({'model': ui_model, 'ws_url': ws_url});
var ui_model = new UiModel({backend: backend});
var dispatcher = _.clone(Backbone.Events);

// views
var log_view         = new LogView({model: ui_model, backend: backend, el: '#logviewer'});
var panel_view       = new PanelView({model: ui_model, el: '.toolbar'});
var file_select_view = new FileSelectView({model: ui_model, el: '#logselect > select'});
var mode_select_view = new ModeSelectView({model: ui_model, el: '#modeselect > select'});
var script_view      = new ScriptView({model: ui_model, el: '#scriptinput input'});
var config_view      = new ConfigurationView({model: ui_model, el: '#configuration'});
var quickbar_view    = new QuickbarView({model: ui_model,el: '.quickbar .button-group'});


