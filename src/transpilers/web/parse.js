import BuildDOM from './BuildDOM';
import {BuildStyles} from './BuildStyle';

let initialState = {
    css: {
        r1: '',
        r2: '',
        r3: '',
        r4: '',
    },
    html: ''
}

export const parse = (state, element_id) => {

    if (!state[element_id]) {
        return initialState;
    }

    const element = state[element_id] || {},
        {data = {}, childIds = [], elementType = ''} = element,
        {layer = '', tag = '', className = '', vars = {}} = data;

    
    const dom = new BuildDOM();
    dom.setTag(tag);
    dom.addClassName(layer);
    dom.addClassName(className);

    const style = new BuildStyles();

    let bestSelector = layer || className || `element-${element_id}`;

    if (bestSelector === `element-${element_id}`) {
        dom.addClassName(`element-${element_id}`);
    }

    bestSelector = ` .${bestSelector}`;
    style.setStyle(bestSelector, vars.r1, 1);
    style.setStyle(bestSelector, vars.r2, 2);
    style.setStyle(bestSelector, vars.r3, 3);
    style.setStyle(bestSelector, vars.r4, 4);

    const innerData = data.data || '';

    if (innerData) {
        switch (elementType) {
            case 'TEXT':
                dom.addContent(innerData);
                break;
            case 'IMAGE':
                dom.setTag('img');
                dom.addAttribute('src', innerData);
                style.renameKey('width', 'maxWidth');
                style.renameKey('height', 'maxHeight');
                break;
        }
    }


    if (childIds && childIds.length > 0) {
        childIds.forEach(child_id => {

            const childrenDom = parse(state, child_id);

            dom.addContent(childrenDom.html);
            style.addContent(childrenDom.css.r1, 1);
            style.addContent(childrenDom.css.r2, 2);
            style.addContent(childrenDom.css.r3, 3);
            style.addContent(childrenDom.css.r4, 4);
        });
    }

    const generatedStyle = style.style();


    return {
        html: dom.html(),
        css: {
            r1: generatedStyle.r1,
            r2: generatedStyle.r2,
            r3: generatedStyle.r3,
            r4: generatedStyle.r4
        }
    }

}


export default parse;