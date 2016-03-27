/// <reference path="Utils.ts" />

module Settings {
    interface ISettings {
        toolbarHeight: number,

        panelHidden: boolean,
        numTailLines: boolean,

        wrapLines: boolean,
        linesOfHistory: number,
        linesToTail: number,

        currentCommand: string,
        currentScript: string,
        currentFile: string
    }

    export class Settings {
        settings: ISettings;
        signals: Object;

        constructor(settings) {
            this.settings = settings;
            this.signals = {}

            let keys: string[] = Object.keys(this.settings);
            for (var i=0; i<keys.length; i++) {
                this.signals[keys[i]] = new Utils.Signal<any>();
            }
        }

        onChange(name, callback) {
            this.signals[name].addCallback(callback);
        }

        set<T>(key: string, value: T) {
            console.log('settings key "' + key + '" set to "' + value + '"');
            this.settings[key] = value;
            this.signals[key].trigger(value);
        }

        get<T>(key: string) {
            return this.settings[key];
        }
    }
}
