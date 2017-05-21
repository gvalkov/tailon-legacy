class LogView {
    $container: JQuery;
    containerParent: HTMLElement;

    history: HTMLElement[];
    autoScroll: boolean;
    lastSpan: HTMLElement;
    lastSpanClasses: string;

    constructor(
        public backend: TailonServer,
        public settings: Settings.Settings,
        public container: HTMLElement,
        public logEntryClass: string,
        public logNoticeClass: string
    ) {
        this.$container = $(container);
        this.containerParent = container.parentElement;

        this.history = [];
        this.autoScroll = true;
        this.lastSpan = null;
        this.lastSpanClasses = '';
    }

    toggleWrapLines() {
        this.$container.toggleClass('log-view-wrapped', this.settings.get<boolean>('wrapLines'));
    }

    createSpan(inner_html: string, class_names: string) {
        let span: HTMLElement = document.createElement('span');
        span.innerHTML = inner_html;
        span.className = class_names;
        return span
    }

    createLogEntrySpan(inner_html: string) {
        return this.createSpan(inner_html, this.logEntryClass);
    }

    createLogNoticeSpan(inner_html: string) {
        return this.createSpan(inner_html, this.logNoticeClass);
    }

    writeSpans(spans: HTMLElement[]) {
        if (spans.length === 0) {
            return;
        }

        var scrollAfterWrite = this.isAtBottom();
        let fragment: DocumentFragment = document.createDocumentFragment();

        // Create spans from all elements and add them to a temporary DOM.
        for (var i = 0; i < spans.length; i++) {
            let span = spans[i];
            this.history.push(span);
            fragment.appendChild(span);
        }

        this.container.appendChild(fragment);
        this.trimHistory();

        //fragment.innerHTML = '';

        if (this.autoScroll && scrollAfterWrite) {
            this.scroll();
        }

        if (this.lastSpan) {
            this.lastSpan.className = this.lastSpanClasses;
        }

        this.lastSpan = this.history[this.history.length-1];
        this.lastSpanClasses = this.lastSpan.className;
        this.lastSpan.className = this.lastSpanClasses + ' log-entry-current';
    }

    createSpans(message: string[] | any ) {
        let spans: HTMLElement[] = [];

        if (Array.isArray(message)) {
            for (var i=0; i<message.length; i++) {
                var line = Utils.escapeHtml(message[i]);
                line = line.replace(/\n$/, '');
                spans.push(this.createLogEntrySpan(line));
            }
        } else if ('err' in message) {
            for (var i=0; i<message['err'].length; i++) {
                let line: string = message['err'][i];
                spans.push(this.createLogNoticeSpan(line));
            }
        }

        this.writeSpans(spans);
    }

    clearLines() {
        this.container.innerHTML = '';
        this.history = [];
        this.lastSpan = null;
    }

    resize() {
        let toolbarHeight = this.settings.get<number>('toolbarHeight');
        this.$container.height(window.innerHeight - toolbarHeight);
    }

    scroll() {
        this.containerParent.scrollTop = this.containerParent.scrollHeight;
    }

    trimHistory() {
        let linesOfHistory = this.settings.get<number>('linesOfHistory');
        if (linesOfHistory !== 0 && this.history.length > linesOfHistory) {
            for (var i = 0; i < (this.history.length - linesOfHistory + 1); i++) {
                this.container.removeChild(this.history.shift());
            }
        }
    }

    isAtBottom() {
        let autoScrollOffset = this.containerParent.scrollTop -
            (this.containerParent.scrollHeight - this.containerParent.offsetHeight);
        return Math.abs(autoScrollOffset) < 50;
    }

}

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
