import {urlFromBackgroundUrl} from '../utils'
export const parse = (dom, data, stylesheet) => {

    const innerData = data.content || '';
    const backgroundImage = stylesheet.getValueForKey("backgroundImage");
    const url = innerData || urlFromBackgroundUrl(backgroundImage);

    stylesheet.renameKey('backgroundSize', 'resizeMode');

    if (url) {
        dom.addAttribute('source', `{{uri: '${url}'}}`);
    }
}

