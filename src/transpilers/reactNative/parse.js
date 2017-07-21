import BuildDOM from './BuildDOM';
import {BuildDependencies} from './BuildDependencies';
import {BuildStyles} from './BuildStyle';
import {selectorFromElementType, sortChildId} from './utils';

let initialState = {
    style: '',
    jsx: ''
}

export const stylesheet = new BuildStyles();
export const dependencies = new BuildDependencies();

export const parse = (state, element_id) => {

    if (!state[element_id]) {
        return initialState;
    }

    const element = state[element_id] || {},
        {data = {}, childIds = [], elementType = '', style = {}} = element,
        {layer = '', tag = '', className = ''} = data;


    const dom = new BuildDOM();
    dom.setTagByElementType(elementType);
    dom.addClassName(layer);
    dom.addClassName(className);

    dependencies.addDependencyByElementType(elementType);

    let typeSelector = selectorFromElementType(elementType);
    let bestSelector = layer || className || `${typeSelector}${element_id}`;

    if (bestSelector === `${typeSelector}${element_id}`) {
        dom.addClassName(`${typeSelector}${element_id}`);
    }

    stylesheet.newStyle(element_id);
    stylesheet.setStyle(bestSelector, style);

    const innerData = data.content || '';

    if (innerData) {
        switch (elementType) {
            case 'TEXT':
                dom.addContent(innerData);
                break;
            case 'IMAGE':
                dom.addAttribute('source', `{{uri: '${innerData}'}}`);
                break;
        }
    }


    if (childIds && childIds.length > 0) {
        const sortedChildIds = sortChildId(state, childIds);

        sortedChildIds.forEach(child_id => {
            const childrenDom = parse(state, child_id);

            dom.addContent(childrenDom.jsx);
        });
    }

    const generatedStyle = stylesheet.style();

    return {
        jsx: dom.jsx(),
        style: generatedStyle,
        dependencies: dependencies.allDependencies()
    }

}

export default parse;