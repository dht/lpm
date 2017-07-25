import ElementTypes from '../constants/ElementTypes'
import treeOperations from './treeOperations';

const getSelection = (state) => {

    const {elementSelection} = state;

    const parent_id = parseInt(elementSelection.parent_id, 10) || 0;
    const selected_element_id = parseInt(elementSelection.id, 10);
    const selected_element_type = elementSelection.elementType;
    const isPlaceholder = (selected_element_type === ElementTypes.PLACEHOLDER);

    return {
        parent_id,
        selected_element_id,
        selected_element_type,
        isPlaceholder,
        modeId: getModeId(state),
    }
}

export const getMaxOrder = state => {
    const {elementSelection} = state;

    const parent_id = parseInt(elementSelection.parent_id, 10) || 0;

    return treeOperations.getMaxOrder(state, parent_id);
}

export const getModeId = state => {
    return state.appState.modeId;
}

const manipulateState = (state) => {
    return Object.keys(state).reduce((output, key) => {
        let element = state[key];
        element.data = element.data || {};
        element.data.modeId = 0;

        output[key] = element;

        return output;
    }, {});
}

export  default {
    getSelection,
    getMaxOrder,
    getModeId,
}