import {urlFromBackgroundUrl} from '../utils'
export const parse = (dom, data, style) => {

    const innerData = data.content || '';
    const {backgroundImage} = style;
    const url = innerData || urlFromBackgroundUrl(backgroundImage);

    if (url) {
        dom.addAttribute('source', `{{uri: '${url}'}}`);
    }
}