import {ActionTypes} from '../clipboard/clipboard';

import elementActions from '../elements/elements_thunks';
import {getFlexState} from '../../utils/utils';
import treeOperations from '../../utils/treeOperations';

import clone from 'clone';

const setCopiedStyle = (value) => {

    return {
        type: ActionTypes.SET_COPIED_STYLE,
        value,
    }
}


const setCopiedElement = (value) => {

    return {
        type: ActionTypes.SET_COPIED_ELEMENT,
        value,
    }
}


const setCopiedElementTree = (element) => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());

        let elements = treeOperations.treeElements(state, element.id);

        if (!elements || Object.keys(elements).length === 0) {
            return Promise.resolve(false);
        }

        let value = clone(elements);

        dispatch(setCopiedElement(value));
        return Promise.resolve(true);
    }
}

const copy = () => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());
        const {elementSelection} = state;

        const selectedElement = treeOperations.getItem(state.elements.present, elementSelection.id);

        return dispatch(setCopiedElementTree(selectedElement))
            .then(result => {
                if (!result) {
                    return Promise.resolve({message: 'Nothing to copy'});
                } else {
                    return Promise.resolve({message: 'Element copied to clipboard'});
                }
            });

    }
}

const copyStyle = () => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());
        const {elementSelection} = state;

        const selectedElement = treeOperations.getItem(state.elements.present, elementSelection.id);
        const style = {...selectedElement.style};

        delete style['order'];

        dispatch(setCopiedStyle(style));

    }
}

const paste = () => {
    return (dispatch, getState) => {

        const state = getFlexState(getState());
        const {elementSelection} = state;

        const selectedElement = treeOperations.getItem(state.elements.present, elementSelection.id);

        if (selectedElement.elementType === 'PLACEHOLDER') {
            dispatch(elementActions.pasteCopiedElement(selectedElement));
            return Promise.resolve({message: 'Element pasted'});
        } else {
            dispatch(elementActions.pasteCopiedStyle(selectedElement));
            return Promise.resolve({message: 'Style pasted'});
        }

    }
}

export default {
    setCopiedStyle,
    setCopiedElement,
    setCopiedElementTree,
    copy,
    copyStyle,
    paste,
}