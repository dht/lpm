import actions from './elements_actions';
import selection_actions from '../elementSelection/elementSelection_actions';

import treeOperations from '../../utils/treeOperations';
import stateOperations from '../../utils/stateOperations';

import ElementTypes from '../../constants/ElementTypes'

import {getFlexState} from '../../utils/utils';
import {parseLoremPixel} from '../../utils/loremPixel';
import {transform_sketch} from '../../utils/sketch';

import clone from 'clone';

export const getModeId = state => {
    return state.appState.modeId || 0;
}

const addPlaceholder = () => {

    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState);


        let action = actions.addElement(maxId + 1, ElementTypes.PLACEHOLDER, parent_id, {
            order: maxOrder + 1, flex: 1, backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }, {modeId: modeId});
        dispatch(action);


        dispatch(selection_actions.setSelectedElement(action.id, parent_id, action.elementType))

        return {id: action.id, parent_id, elementType: action.elementType};
    }
}
const addText = () => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_id, selected_element_type} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState);

        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.TEXT, parent_id, {
            order: maxOrder + 1,
            flex: 'none',
        }, {content: "Lorem ipsum", modeId: modeId});

        dispatch(action);

        dispatch(selection_actions.setSelectedElement(action.id, parent_id, action.elementType))
    }
}
const addImage = () => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_type, selected_element_id,} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState);

        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.IMAGE, parent_id, {
            order: maxOrder + 1,
            backgroundImage: "url('https://rnbin.com/images/image.png')",
            backgroundSize: "cover",
            width: "80px",
            height: "80px",
            flex: "none"
        }, {modeId: modeId});

        dispatch(action);

        dispatch(selection_actions.setSelectedElement(action.id, parent_id, action.elementType))
    }
}
const addVerticalView = (rows = 1) => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_type, selected_element_id,} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState),
            refreshAction;

        //console.log('onAddVerticalView rows -> ', rows);
        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.VIEW, parent_id, {
            order: maxOrder + 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
        }, {modeId: modeId})
        let root_id = action.id;

        dispatch(action);

        for (let row = 0; row < parseInt(rows, 10); row++) {
            action = actions.addElement(maxId + 1, ElementTypes.PLACEHOLDER, root_id, {
                order: row + 1,
                flex: 1,
                backgroundSize: 'cover'
            }, {modeId: modeId})
            dispatch(action);

            if (row === 0) {
                dispatch(selection_actions.setSelectedElement(action.id, root_id, action.elementType))
                refreshAction = selection_actions.refreshSelector(20);
            }
        }

        return dispatch(refreshAction);
    }
}
const addVerticalViewBySizes = (sizes) => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_type, selected_element_id,} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState),
            refreshAction;

        //console.log('onAddVerticalView rows -> ', rows);
        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.VIEW, parent_id, {
            order: maxOrder + 1,
            flexDirection: 'column',
            alignItems: 'stretch',
            display: 'flex',
            backgroundSize: 'cover',
        }, {modeId: modeId})
        let root_id = action.id;

        dispatch(action);

        for (let row = 0; row < sizes.length; row++) {
            let size = sizes[row];

            let style = {order: row + 1};

            if (sizes[row] < 10) {
                style.flex = size;
            } else {
                style.height = size + 'px';
            }


            action = actions.addElement(maxId + 1, ElementTypes.PLACEHOLDER, root_id, style, {modeId: modeId})
            dispatch(action);

            if (row === 0) {
                dispatch(selection_actions.setSelectedElement(action.id, root_id, action.elementType))
                refreshAction = selection_actions.refreshSelector(20);
            }
        }

        return dispatch(refreshAction);
    }
}

const addHorizontalView = (columns = 1) => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_type, selected_element_id,} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState),
            refreshAction;

        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.VIEW, parent_id, {
            order: maxOrder + 1,
            flexDirection: 'row',
            minHeight: '30px',
            display: 'flex',
            alignItems: 'stretch',
            backgroundSize: 'cover',
        }, {modeId: modeId})
        let root_id = action.id;

        dispatch(action);

        for (let col = 0; col < parseInt(columns, 10); col++) {
            action = actions.addElement(maxId + 1, ElementTypes.PLACEHOLDER, root_id, {
                flex: 1,
                order: col + 1
            }, {modeId: modeId})
            dispatch(action);

            if (col === 0) {
                dispatch(selection_actions.setSelectedElement(action.id, root_id, action.elementType))
                refreshAction = selection_actions.refreshSelector(20);
            }
        }

        return dispatch(refreshAction);
    }
}
const addHorizontalViewBySizes = (sizes) => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_type, selected_element_id,} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState),
            refreshAction;

        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.VIEW, parent_id, {
            order: maxOrder + 1,
            flexDirection: 'row',
            minHeight: '30px',
            display: 'flex',
            alignItems: 'stretch'
        }, {modeId: modeId})

        let root_id = action.id;

        dispatch(action);

        for (let col = 0; col < sizes.length; col++) {
            let style = {order: col + 1};
            let size = sizes[col];

            if (size < 10) {
                style.flex = size;
            } else {
                style.width = size + 'px';
            }

            action = actions.addElement(maxId + 1, ElementTypes.PLACEHOLDER, root_id, style, {modeId: modeId})

            dispatch(action);

            if (col === 0) {
                dispatch(selection_actions.setSelectedElement(action.id, root_id, action.elementType))
                refreshAction = selection_actions.refreshSelector(20);
            }
        }

        return dispatch(refreshAction);
    }
}
const addView = (data) => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_type, selected_element_id,} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState);

        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.VIEW, parent_id, {
            order: maxOrder + 1,
        }, {modeId: modeId, ...data})
        let root_id = action.id;

        dispatch(action);

        return Promise.resolve(root_id);
    }
}
const addDivider = (data) => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_type, selected_element_id,} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState);

        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.VIEW, parent_id, {
            order: maxOrder + 1,
            backgroundColor: '#333',
            margin: '10px 0',
            width: '200px',
            height: '3px',
        }, {modeId: modeId, ...data})
        let root_id = action.id;

        dispatch(action);

        dispatch(selection_actions.setSelectedElement(action.id, parent_id, action.elementType))

        return Promise.resolve(root_id);
    }
}
const addSnippet = (data) => {
    return (dispatch, getState) => {

        let flexState = getFlexState(getState());
        let {parent_id, modeId, maxId, selected_element_type, selected_element_id,} = stateOperations.getSelection(flexState),
            maxOrder = stateOperations.getMaxOrder(flexState);

        let action = actions.addOrReplace(maxId + 1, selected_element_type, selected_element_id, ElementTypes.SNIPPET, parent_id, {
            order: maxOrder + 1,
        }, {modeId: modeId, ...data})
        let root_id = action.id;

        dispatch(action);

        dispatch(selection_actions.setSelectedElement(action.id, parent_id, action.elementType))

        return Promise.resolve(root_id);
    }
}
const selectRoot = () => {
    return (dispatch, getState) => {
        const rootElement = treeOperations.root(getState().flexState);
        dispatch(selection_actions.setSelectedElement(rootElement.id, rootElement.parent_id, rootElement.elementType));
    }
}
const addPlaceholderToRoot = () => {
    return (dispatch, getState) => {
        dispatch(selectRoot());
        dispatch(addPlaceholder());
    }
}
const applyStyle = (id, style) => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());
        const {appState} = state;
        const {resolution = 1} = appState;

        dispatch(actions.applyStyle(id, style, resolution));
    }
}
const injectSnippet = (rootId, rootParentId, rootOrder, snippet) => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());
        let action, reIndexMap = {}, _actions = [];

        const ids = treeOperations.treeElementIds(state, rootId);

        dispatch(actions.removeElements(ids));

        let maxId = treeOperations.getMaxId(getFlexState(getState()).elements.present);
        maxId++;

        let snippetState = clone(snippet.state);

        let elementsToAddIds = Object.keys(snippetState);

        let index = 0;
        let promises = [];

        while (elementsToAddIds.length) {

            const id = elementsToAddIds.shift();
            let element = snippetState[id];

            if (index === 0) {
                element.id = rootId;
                element.parent_id = rootParentId;
                element.style.order = rootOrder;
            } else {
                element.parent_id = reIndexMap[element.parent_id];
            }

            maxId++;
            action = actions.addElement(maxId, element.elementType, element.parent_id, element.style, element.data);
            const promise = dispatch(action);

            _actions.push(action);
            promises.push(promise);

            reIndexMap[id] = action.id;

            index++;
        }

        return Promise.all(promises)
            .then(() => {
                return _actions;
            });
    }
}
const resetScreen = () => {
    return (dispatch, getState) => {

        const modeId = getModeId(getFlexState(getState()));

        dispatch(selection_actions.setSelectedElement(1, 0, 'VIEW'));
        dispatch(actions.clearElements());

        let action;

        // 1
        action = dispatch(actions.addElement(1, ElementTypes.VIEW, 0, {
            order: 1,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        }, {modeId: modeId}));

        const root_id = action.id;

        // 2 [1]
        const selected_action = actions.addElement(2, ElementTypes.PLACEHOLDER, root_id, {
            order: 1,
            flex: 1,
            height: "50px",
        }, {modeId: modeId});

        dispatch(selected_action);

        dispatch(selection_actions.setSelectedElement(selected_action.id, selected_action.parent_id, selected_action.elementType));

        return Promise.resolve(true);
    }
}
const applyDataContentForCurrentElement = (data) => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());
        const {elementSelection} = state,
            {id, rect} = elementSelection;

        const selectedElement = treeOperations.getItem(state.elements.present, elementSelection.id) || {},
            {elementType} = selectedElement;

        if (elementType === ElementTypes.IMAGE) {
            data.content = parseLoremPixel(data.content, Math.ceil(rect.width), Math.ceil(rect.height));
        }

        dispatch(actions.applyData(id, data));
        dispatch(selection_actions.refreshSelector(20));
        return dispatch(selection_actions.refreshSelector(500));
    }
}

const applyDataFieldForCurrentElement = (fieldName, fieldType) => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());
        const {elementSelection} = state;

        dispatch(actions.applyDataField(elementSelection.id, fieldName, fieldType));
    }
}
const applyStyleFieldForCurrentElement = (fieldName, cssKey) => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());
        const {elementSelection} = state;

        dispatch(actions.applyStyleField(elementSelection.id, fieldName, cssKey));
    }
}

const pasteCopiedStyle = (element) => {
    return (dispatch, getState) => {

        const {appState, clipboard} = getFlexState(getState());
        const {copiedStyle} = clipboard,
            {resolution = 1} = appState;

        if (copiedStyle) {
            dispatch(actions.applyStyle(element.id, copiedStyle, resolution));
        }
    }
}
const pasteCopiedElement = (element) => {
    return (dispatch, getState) => {

        if (element.elementType !== 'PLACEHOLDER') {
            return Promise.resolve({message: 'Must paste element within a placeholder'})
        }

        const {clipboard} = getFlexState(getState()),
            {copiedElement} = clipboard;

        if (!copiedElement || Object.keys(copiedElement).length === 0) {
            return Promise.resolve({message: 'Nothing to paste'})
        }

        dispatch(injectSnippet(element.id, element.parent_id, element.style.order, {state: copiedElement}));
    }
}

export const pasteSketch = (clipboardText) => {
    return (dispatch, getState) => {

        const style = transform_sketch(clipboardText);
        const state = getFlexState(getState());
        const {elementSelection} = state;

        if (state) {
            dispatch(applyStyle(elementSelection.id, style));
        }
    }
}

export default {
    addPlaceholder,
    addText,
    addImage,
    addVerticalView,
    addVerticalViewBySizes,
    addHorizontalView,
    addHorizontalViewBySizes,
    addView,
    addDivider,
    addSnippet,
    selectRoot,
    addPlaceholderToRoot,
    applyStyle,
    injectSnippet,
    resetScreen,
    applyDataContentForCurrentElement,
    applyDataFieldForCurrentElement,
    applyStyleFieldForCurrentElement,
    pasteCopiedStyle,
    pasteCopiedElement,
    pasteSketch,
}