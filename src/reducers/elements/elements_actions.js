import {ActionTypes} from './elements'

import ElementTypes from '../../constants/ElementTypes'

import {getFlexState} from '../../utils/utils';

const addElement = (id, elementType, parent_id, style, data) => {

    data = data || {}

    return {
        type: ActionTypes.ADD_ELEMENT,
        id,
        parent_id,
        elementType,
        style,
        data
    }
}

const replaceElement = (target_id, elementType, parent_id, style, data) => {

    data = data || {}

    return {
        type: ActionTypes.REPLACE_ELEMENT,
        id: target_id,
        parent_id,
        elementType,
        style,
        data
    }
}

const clearElements = () => {

    return {
        type: ActionTypes.CLEAR_ELEMENTS,
    }
}

const setElements = (value) => {
    return {
        type: ActionTypes.SET_ELEMENTS,
        value,
        
    }
}

const applyStyle = (id, style, resolution) => {

    return {
        type: ActionTypes.APPLY_STYLE,
        id,
        style,
        resolution
    }
}

const applyData = (id, data) => {

    return {
        type: ActionTypes.APPLY_DATA,
        id,
        data
    }
}

const applyDataField = (id, fieldName, fieldType) => {

    return {
        type: ActionTypes.APPLY_DATA_FIELD,
        id,
        fieldName,
        fieldType
    }
}

const applyStyleField = (id, fieldName, cssKey) => {

    return {
        type: ActionTypes.APPLY_STYLE_FIELD,
        id,
        fieldName,
        cssKey
    }
}

const applyRole = (id, role) => {

    return {
        type: ActionTypes.APPLY_ROLE,
        id,
        role
    }
}

const applyClass = (id, value) => {

    return {
        type: ActionTypes.APPLY_CLASS,
        id,
        value
    }
}

const applyVars = (id, key, value) => {

    return {
        type: ActionTypes.APPLY_VARS,
        id,
        key,
        value
    }
}

const clearVars = (id, key) => {

    return {
        type: ActionTypes.CLEAR_VARS,
        id,
        key
    }
}

const deleteElement = (id) => {

    return {
        type: ActionTypes.DELETE_ELEMENT,
        id,
    }
}

const switchElementsOrder = (id1, id2) => {
    return {
        type: ActionTypes.SWITCH_ELEMENTS_ORDER,
        id1,
        id2
    }
}

const previewData = (id, data) => {

    return {
        type: ActionTypes.PREVIEW_DATA,
        id,
        data,
        
    }
}

const previewStyle = (id, style) => {

    return {
        type: ActionTypes.PREVIEW_STYLE,
        id,
        style,
        
    }
}

const removeElements = (ids) => {

    return {
        type: ActionTypes.REMOVE_ELEMENTS,
        ids,
    }
}

const renameTag = (id, value) => {
    return {
        type: ActionTypes.RENAME_TAG,
        id,
        value,
    }
}

const renameLayer = (id, value) => {
    return {
        type: ActionTypes.RENAME_LAYER,
        id,
        value,
    }
}

const expandView = (id, isClosed) => {
    return {
        type: ActionTypes.EXPAND_VIEW,
        id,
        isClosed,
    }
}

const loadResolution = (value) => {
    return {
        type: ActionTypes.LOAD_RESOLUTION,
        value,
    }
}

const toggleVisibility = (element_id) => {
    return {
        type: ActionTypes.TOGGLE_VISIBILITY,
        element_id,
    }
}

const addOrReplace = (id, selected_element_type, selected_element_id, elementType, parent_id, style, data = {}) => {

    switch (selected_element_type) {
        case ElementTypes.PLACEHOLDER:
            return replaceElement(selected_element_id, elementType, parent_id, style, data);
        default:
            return addElement(id, elementType, parent_id, style, data);
    }
}

export default {
    addElement,
    replaceElement,
    clearElements,
    applyData,
    applyDataField,
    applyStyleField,
    applyRole,
    applyClass,
    applyVars,
    clearVars,
    setElements,
    applyStyle,
    deleteElement,
    switchElementsOrder,
    previewData,
    previewStyle,
    removeElements,
    renameTag,
    renameLayer,
    expandView,
    loadResolution,
    toggleVisibility,
    addOrReplace,
}