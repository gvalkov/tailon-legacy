module Utils {
    // TODO: Use the jquery.d.ts file from the DefinitelyTyped project.
    declare var $;

    export function formatBytes(size: number): string {
        var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = 0;
        while(size >= 1024) {
            size /= 1024;
            ++i;
        }
        return size.toFixed(1) + ' ' + units[i];
    }

    export function formatFilename(state) {
        if (!state.id) return state.text;
        var size = formatBytes($(state.element).data('size'));
        return '<span>' + state.text + '</span>' + '<span style="float:right;">' + size + '</span>';
    }

    export function endsWith(str: string, suffix: string) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    export function startsWith(str: string, prefix: string) {
        return str.indexOf(prefix) === 0;
    }

    var escape_entity_map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "/": '&#x2F;'
    };

    // This is the escapeHtml function from mustache.js.
    export function escapeHtml(str: string): string {
        return String(str).replace(/[&<>\/]/g, function (s) {
            return escape_entity_map[s];
        });
    }

    interface Callable {
        (T): any;
    }

    export class Signal<T> {
        private listeners: Callable[];
        constructor() {
            this.listeners = [];
        }

        addCallback(callback: Callable) {
            this.listeners.push(callback);
        }

        removeObserver(observer: Callable) {
            this.listeners.splice(this.listeners.indexOf(observer), 1);
        }

        trigger(data?: T) {
            this.listeners.forEach((callback: Callable)=> {
                callback(data);
            });
        }
    }
}
