import {parseCss} from './parseCss';

export class BuildStyle {
    constructor() {
        this.clear();
    }

    clear() {
        this.selector = '';
        this._style = {};
    }

    getStyle() {
        return this._style;
    }

    setStyle(selector, style) {
        if (selector && style) {
            this.selector = selector;
            this._style = style;
        }
    }

    getValueForKey(key) {
        return this._style[key];
    }

    renameKey(key, newKey) {

        if (typeof this._style[key] === 'undefined') {
            return;
        }

        this._style[newKey] = this._style[key];
        delete (this._style[key]);
    }

    style() {
        let output = {};
        output[this.selector] = parseCss(this._style);
        return output;
    }
}


export class BuildStyles {
    constructor() {
        this.clear();
    }

    clear() {
        this._id = 0;
        this.stylesheet = new BuildStyle();
        this.rules = {};
    }

    newStyle(id) {
        this._id = id;
        this.stylesheet.clear();
    }

    setStyle(selector, style) {
        this.stylesheet.setStyle(selector, style);
    }

    bakeStyle() {
        this.rules[this._id]  = this.stylesheet.style();
    }

    getValueForKey(key) {
        return this.stylesheet.getValueForKey(key);
    }

    renameKey(key, newKey) {
        this.stylesheet.renameKey(key, newKey);
    }

    style() {
       return Object
           .keys(this.rules)
           .reduce((output, key) =>{
                return {...output,  ...this.rules[key]};
           }, {});
    }
}