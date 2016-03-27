class TailonServer {
    connected: boolean;
    socket: SockJS;
    onConnect: Utils.Signal<void>;
    onDisconnect: Utils.Signal<void>;
    onMessage: Utils.Signal<string>;

    constructor(public apiURL: string,
                public connectionRetries: number) {
        this.connected = false;
        this.onConnect = new Utils.Signal<void>();
        this.onDisconnect = new Utils.Signal<void>();
        this.onMessage = new Utils.Signal<string>();
    }

    connect() {
        this.socket = new SockJS(this.apiURL);
        this.socket.onopen = this.connectionMade;
        this.socket.onclose = this.connectionLost;
    }

    connectionMade= () => {
        console.log('connected to backend')
        this.connected = true;
        this.socket.onmessage = this.dataReceived;
        this.onConnect.trigger();
    }

    connectionLost= () => {
        this.onDisconnect.trigger();
        if (this.connected) {
            this.connected = false;
            return
        }

        this.connected = false;
        if (this.connectionRetries === 0) {
            return;
        }

        window.setTimeout(function () {
            this.connectionRetries -= 1;
            this.connect()
        }, 1000);
    }

    dataReceived = (message: SJSMessageEvent) => {
        var data = JSON.parse(message.data);
        this.onMessage.trigger(data);
    }

    sendMessage = (message, retry: boolean) => {
        var connected = this.connected;
        var socket = this.socket;
        if (retry) {
            (function() {
                if (connected) {
                    socket.send(JSON.stringify(message));
                } else {
                    window.setTimeout(arguments.callee, 20);
                }
            })();
        } else {
            if (!connected && !retry) {
                return;
            }
            socket.send(JSON.stringify(message));
        }
    }
}
