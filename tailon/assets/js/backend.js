//----------------------------------------------------------------------------
// Backend communications.
//----------------------------------------------------------------------------

var TailonServer = Backbone.Model.extend({
    defaults: {
        'connected': false,
    },

    initialize: function(options) {
        this.connection_retries = 10;
        this.ws_url = options.ws_url;

        _.bindAll(this, 'onOpen', 'onClose', 'onMessage', 'sendMessage');

        this.connect();

        this.on('change:connected', function(model) {
            if (model.get('connected')) {
                this.socket.onmessage = this.onMessage;
            }
        });
    },

    connect: function() {
        this.socket = new SockJS(this.ws_url);
        this.socket.onopen = this.onOpen;
        this.socket.onclose = this.onClose;
    },

    onOpen: function() {
        this.set({'connected': true});
    },

    onClose: function() {
        if (this.get('connected')) {
            this.set({'connected': false});
            return;
        }

        this.set({'connected': false});
        if (this.connection_retries === 0) {
            return;
        }

        window.setTimeout(function () {
            this.socket_retries -= 1;
            this.connect()
        }, 1000);
    },

    onMessage: function(message) {
        var data = JSON.parse(message.data);
        dispatcher.trigger('new-message', data);
    },

    sendMessage: function(message, retry) {
        if (retry) {
            var model = this;
            (function() {
                if (model.get('connected')) {
                    model.socket.send(JSON.stringify(message));
                } else {
                    window.setTimeout(arguments.callee, 20);
                }
            })();
        } else {
            if (!this.get('connected') && !retry) {
                return;
            }
            this.socket.send(JSON.stringify(message));
        }
    }
})

