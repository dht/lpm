export default class BuildDOM {
    constructor() {
        this.clear();
    }

    clear() {
        this.tag = 'div';
        this.classNames = [];
        this.attributes = [];
        this.content = '';
    }

    addAttribute(key, value) {
        if (key && value) {
            this.attributes.push({key, value});
        }
    }

    addClassName(value) {
        if (value) {
            this.classNames.push(value);
        }
    }

    setTag(tagName) {
        this.tag = tagName || 'div';
    }

    addContent(content) {
        this.content += content;
    }

    _getAttribute(key) {
        return this.attributes.reduce((output, attribute) => {
            return (attribute.key === key) ? attribute.value : output
        }, null);
    }

    html() {
        const attributesText = this.attributes
            .map(attribute => `${attribute.key}="${attribute.value}"`);

        const attributes = attributesText.join(' ').trim(),
            className = this.classNames.join(' ').trim();

        if (this.tag === 'img') {
            const src = this._getAttribute('src');
            return `<img class="${className} display-1x" src="${src}" alt="" />`+
                   `<img class="${className} display-2x" src="${src}" srcset="${src}" alt="" />`;
        }

        return `<${this.tag} class="${className}"${attributes}>${this.content}</${this.tag}>`;
    }
}