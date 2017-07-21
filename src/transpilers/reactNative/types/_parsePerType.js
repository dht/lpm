import {parse as parseView} from './View';
import {parse as parseImage} from './Image';
import {parse as parseText} from './Text';
import {parse as parseBase} from './Base';

export const parse = (elementType, dom, data, stylesheet) => {

    switch(elementType) {
        case 'VIEW':
            return parseView(dom, data, stylesheet);
        case 'TEXT':
            return parseText(dom, data, stylesheet);
        case 'IMAGE':
            return parseImage(dom, data, stylesheet);
        default:
            return parseBase(dom, data, stylesheet);
    }
}

export default parse;