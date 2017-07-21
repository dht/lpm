import {parse as parseView} from './View';
import {parse as parseImage} from './Image';
import {parse as parseText} from './Text';
import {parse as parseBase} from './Base';

export const parse = (elementType, dom, data, style) => {

    switch(elementType) {
        case 'VIEW':
            return parseView(dom, data, style);
        case 'TEXT':
            return parseText(dom, data, style);
        case 'IMAGE':
            return parseImage(dom, data, style);
        default:
            return parseBase(dom, data, style);
    }
}

export default parse;