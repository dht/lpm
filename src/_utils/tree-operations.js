import {filterCopy, forEach, mapCopy, reduce} from './map';


const findOrderLowerThan = (items, order) => {
    let output = null;

    forEach(items, _item => {
        let itemOrder = _item.style.order;
        if (itemOrder < order && (!output || (output && itemOrder > output.style.order))) {
            output = _item;
        }
    });

    return output;
}

const findOrderGreaterThan = (items, order) => {
    let output = null;

    forEach(items, _item => {
        let itemOrder = _item.style.order;

        if (itemOrder > order && (!output || (output && itemOrder < output.style.order))) {
            output = _item;
        }
    });

    return output;
}

const _findMaxOrder = (items) => {
    let output = null;

    forEach(items, _item => {
        let itemOrder = _item.style.order;

        if (!output || (output && itemOrder > output)) {
            output = _item.style.order;
        }
    });

    return output;
}

const _findMinOrder = (items) => {
    let output = null;

    forEach(items, _item => {
        let itemOrder = _item.style.order;

        if (!output || (output && itemOrder < output)) {
            output = _item.style.order;
        }
    });

    return output;
}

export const findMaxOrderForParentId = (elements, parent_id) => {
    const children = getChildren(elements, parent_id);
    return _findMaxOrder(children);
}

export const findMinOrder = (elements) => {
    return _findMinOrder(elements);
}

export const findMaxOrder = (elements) => {
    return _findMaxOrder(elements);
}

export const getItem = (elements, selectedElementId) => {
    return selectedElementId ? elements[selectedElementId] : null;
}

export const getChildren = (elements, parent_id) => {
    return filterCopy(elements, e => e.parent_id === parent_id);
}

export const getSiblings = (elements, selectedElementId) => {
    let output = [];

    // nothing is selected
    if (!selectedElementId) {
        return output;
    }

    const currentElement = elements[selectedElementId];

    // element does not exist - deleted?
    if (!currentElement) {
        return output;
    }

    const currentElement_parentId = currentElement.parent_id;

    // no parent - root element?
    if (!currentElement_parentId && currentElement_parentId !== 0) {
        return output;
    }

    output = getChildren(elements, currentElement_parentId);

    return output;
}


export const aboveItem = (state, selectedElementId) => {
    const elements = state.elements.present;

    let siblings = getSiblings(elements, selectedElementId);
    let selectedElement = getItem(elements, selectedElementId);
    let above = null;

    if (selectedElement && selectedElement.style && selectedElement.style.order) {
        above = findOrderLowerThan(siblings, selectedElement.style.order);
    }

    return above;
}

export const belowItem = (state, selectedElementId) => {
    const elements = state.elements.present;

    let siblings = getSiblings(elements, selectedElementId);
    let selectedElement = getItem(elements, selectedElementId);
    let below = null;

    if (selectedElement && selectedElement.style && selectedElement.style.order) {
        below = findOrderGreaterThan(siblings, selectedElement.style.order);
    }

    return below;
}

export const firstChild = (state, selectedElementId) => {
    const elements = state.elements.present;

    let selectedElement = getItem(elements, selectedElementId);

    if (selectedElement && selectedElement.childIds && selectedElement.childIds.length) {
        const firstChildId = selectedElement.childIds[0];
        return getItem(elements, firstChildId);
    } else {
        return null;
    }
}

export const root = (state) => {
    const elements = state.elements.present;
    const keys = Object.keys(elements);

    if (keys.length === 0) {
        return null;
    }
    const firstElement = getItem(elements, keys[0]);

    if (firstElement && firstElement.parent_id === 0) {
        return firstElement;
    } else {
        return null;
    }
}

export const getElementsOrder = (state, selectedElementId) => {
    const elements = state.elements.present;
    let selectedElement = getItem(elements, selectedElementId);

    const {style = {}} = selectedElement
    const {order} = style

    return order;
}

export const parent = (state, selectedElementId) => {
    const elements = state.elements.present;
    let selectedElement = getItem(elements, selectedElementId);

    return getItem(elements, selectedElement.parent_id);
}

export const treeElements = (state, elementId) => {
    const elements = state.elements.present;
    let elementsInTree = {};

    let elementsToCheck = [elementId];

    let runs = 0;


    while (elementsToCheck.length && runs < 100) {
        const _elementId = elementsToCheck.pop();
        const element = getItem(elements, _elementId);
        elementsInTree[element.id] = element;

        if (element.childIds) {
            elementsToCheck = [...elementsToCheck, ...element.childIds];
        }
    }

    return elementsInTree;
}


const _cleanObject = (object) => {
    return Object.keys(object).reduce((output, key) => {
        const property = object[key];

        if (property && key) {
            output[key] = property;
        }

        return output;
    }, {});
}

export const cleanTreeFromEmpty = (elements) => {
    return Object.keys(elements).reduce((output, key) => {
        const element = elements[key];

        element.style = _cleanObject(element.style);
        element.data = _cleanObject(element.data);
        output[key] = element;

        return output;
    }, {});
}

export const treeElementIds = (state, elementId) => {
    return Object.keys(treeElements(state, elementId));
}

export const getMaxId = (elements) => {

    return reduce(elements, (output, element) => {
        let id = parseInt(element && element.id ? element.id : 0, 10);

        return Math.max(output, id);

    }, 0);
}

export const filterOtherModes = (elements, elementId, currentModeId) => {
    const element = elements[elementId];
    let childIds = element.childIds;

    if (!childIds) {
        return [];
    }

    return childIds
        .filter(id => {
            const data = elements[id].data || {};
            return data.modeId === currentModeId || data.modeId === 0 || data.modeId === 1 && currentModeId === 0;
        });
}

export const childIdsOrder = (present, childIds) => {
    if (childIds && childIds.sort) {
        childIds.sort(function (a, b) {
            const
                elementA = present[a] || {},
                elementB = present[b] || {},
                styleA = elementA.style || {},
                styleB = elementB.style || {},
                orderA = styleA.order || 0,
                orderB = styleB.order || 0;

            return orderA - orderB;
        });
    }

    return childIds;
}

export const identifyRole = (element) => {
    if (element && element.data && element.data.role) {
        return element.data.role;
    }
}

export const selectedElement = (state, elementSelection) => {
    return getItem(state.elements.present, elementSelection.id);
}

export const getRootHeight = (state, otherHeight) => {
    const _root = root(state) || {},
        style = _root.style || {};


    return style.height || otherHeight;
}


export default {
    findOrderLowerThan,
    findOrderGreaterThan,
    findMaxOrderForParentId,
    findMinOrder,
    findMaxOrder,
    getItem,
    getChildren,
    getSiblings,
    aboveItem,
    belowItem,
    firstChild,
    root,
    getElementsOrder,
    treeElements,
    parent,
    cleanTreeFromEmpty,
    treeElementIds,
    getMaxId,
    filterOtherModes,
    childIdsOrder,
    identifyRole,
    selectedElement,
    getRootHeight,
}