export default class BuildDOM {
    constructor() {
        this.clear();
    }

    clear() {
        this.tag = 'View';
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

    setTagByElementType(elementType) {

        switch (elementType) {
            case 'TEXT':
                this.tag = 'Text';
                break;
            case 'IMAGE':
                this.tag = 'Image';
                break;
            default:
                this.tag = 'View';
                break;
        }
    }

    addContent(content) {
        this.content += content;
    }

    _getAttribute(key) {
        return this.attributes.reduce((output, attribute) => {
            return (attribute.key === key) ? attribute.value : output
        }, null);
    }

    jsx() {
        const attributesText = this.attributes
            .map(attribute => `${attribute.key}=${attribute.value}`);

        let attributes = attributesText.join(' ').trim(),
            className = this.classNames.join(' ').trim();

        if (attributes) {
            attributes = ' ' + attributes;
        }

        return `<${this.tag} style={styles.${className}}${attributes}>${this.content}</${this.tag}>`;
    }
}