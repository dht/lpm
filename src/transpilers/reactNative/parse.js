import BuildDOM from './BuildDOM';
import {BuildDependencies} from './BuildDependencies';
import {BuildStyles} from './BuildStyle';
import {selectorFromElementType, sortChildId, formatComponent} from './utils';
import {prettifyHtml} from '../../_utils/prettify';
import parsePerType from './types/_parsePerType';

let initialState = {
    style: '',
    jsx: ''
}

export const stylesheet = new BuildStyles();
export const dependencies = new BuildDependencies();

const _parse = (state, element_id) => {

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
    parsePerType(elementType, dom, data, stylesheet);
    stylesheet.bakeStyle(bestSelector, style);


    if (childIds && childIds.length > 0) {
        const sortedChildIds = sortChildId(state, childIds);

        sortedChildIds.forEach(child_id => {
            const childrenDom = _parse(state, child_id);

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

export const parse = (state, element_id) => {
    stylesheet.clear();
    dependencies.clear();
    return _parse(state, element_id);
}

export const format = (state, element_id, componentName = 'Layout') => {
    const output = parse(state, element_id);

    return formatComponent(componentName,
        output.dependencies,
        prettifyHtml(output.jsx),
        JSON.stringify(output.style, null, 4));
}

export default parse;