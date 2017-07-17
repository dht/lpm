import {parseCss} from './parseCss';

export class BuildStyle {
    constructor() {
        this.clear();
    }

    clear() {
        this.content = '';
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

    addContent(content) {
        this.content += content;
    }

    renameKey(key, newKey) {
        this._style[newKey] = this._style[key];
        delete (this._style[key]);
    }

    style() {
        const content = `${parseCss(this._style)} ${this.content}`.trim();

        if (content.length === 0) {
            return '';
        }

        return `${this.selector} {${content}}`;
    }
}

export class BuildStyles {
    constructor() {
        this.clear();
    }

    clear() {
        this.r = [];
        this.r[1] = new BuildStyle();
        this.r[2] = new BuildStyle();
        this.r[3] = new BuildStyle();
        this.r[4] = new BuildStyle();
    }

    removeExtra(style, resolution) {

        let jointStyle = {};

        for (let r = 1; r < resolution; r++) {
            jointStyle = {...jointStyle, ...this.r[r].getStyle()};
        }

        Object.keys(style || {}).forEach(key => {
            if (key && jointStyle[key] === style[key]) {
                delete style[key];
            }
        })

        return style;
    }

    setStyle(selector, style, resolution) {
        style = this.removeExtra(style, resolution);
        this.r[resolution].setStyle(selector, style);
    }

    renameKey(key, newKey) {
        this.r[1].renameKey(key, newKey);
        this.r[2].renameKey(key, newKey);
        this.r[3].renameKey(key, newKey);
        this.r[4].renameKey(key, newKey);
    }

    addContent(content, resolution) {
        this.r[resolution].addContent(content);
    }

    style() {
        return {
            r1: this.r[1].style(),
            r2: this.r[2].style(),
            r3: this.r[3].style(),
            r4: this.r[4].style(),
        }
    }
}