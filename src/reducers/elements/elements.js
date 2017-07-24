import undoable, {excludeAction} from 'redux-undo'

import {filterCopy as filter, find, mapElements as map} from '../../_utils/map';

const prefix = 'FLEX_';

export const ActionTypes = {
    ADD_ELEMENT: `${prefix}ADD_ELEMENT`,
    REPLACE_ELEMENT: `${prefix}REPLACE_ELEMENT`,
    CLEAR_ELEMENTS: `${prefix}CLEAR_ELEMENTS`,
    SET_ELEMENTS: `${prefix}SET_ELEMENTS`,
    APPLY_DATA: `${prefix}APPLY_DATA`,
    APPLY_ROLE: `${prefix}APPLY_ROLE`,
    APPLY_CLASS: `${prefix}APPLY_CLASS`,
    APPLY_DATA_FIELD: `${prefix}APPLY_DATA_FIELD`,
    APPLY_STYLE_FIELD: `${prefix}APPLY_STYLE_FIELD`,
    PREVIEW_DATA: `${prefix}PREVIEW_DATA`,
    PREVIEW_STYLE: `${prefix}PREVIEW_STYLE`,
    REMOVE_ELEMENTS: `${prefix}REMOVE_ELEMENTS`,
    APPLY_STYLE: `${prefix}APPLY_STYLE`,
    SWITCH_ELEMENTS_ORDER: `${prefix}SWITCH_ELEMENTS_ORDER`,
    DELETE_ELEMENT: `${prefix}DELETE_ELEMENT`,
    RENAME_TAG: `${prefix}RENAME_TAG`,
    RENAME_LAYER: `${prefix}RENAME_LAYER`,
    EXPAND_VIEW: `${prefix}EXPAND_VIEW`,
    APPLY_VARS: `${prefix}APPLY_VARS`,
    SET_VARS: `${prefix}SET_VARS`,
    MERGE_VARS: `${prefix}MERGE_VARS`,
    CLEAR_VARS: `${prefix}CLEAR_VARS`,
    LOAD_RESOLUTION: `${prefix}LOAD_RESOLUTION`,
    TOGGLE_VISIBILITY: `${prefix}TOGGLE_VISIBILITY`,
};

export const styleField = (state, action) => {
    let newState;

    switch (action.type) {
        case ActionTypes.APPLY_STYLE_FIELD:

            newState = {...state};

            if (!action.fieldName) {
                delete newState[action.cssKey];
            } else {
                newState[action.cssKey] = action.fieldName;
            }

            return newState;

        default:
            return state
    }

}

export const vars = (state, action) => {
    let newState, order;

    switch (action.type) {
        case ActionTypes.APPLY_VARS:
            newState = {...state};
            newState[action.key] = {...newState[action.key], ...action.value};
            return newState;

        case ActionTypes.APPLY_STYLE:
            newState = {...state};

            if (action.resolution) {
                for (let r = action.resolution; r <= 4; r++) {
                    const r_key = `r${r}`;

                    if (r === action.resolution) {
                        newState[r_key] = {...newState[r_key], ...action.style};
                    } else {
                        newState[r_key] = {...action.style, ...newState[r_key]};
                    }
                }
            }

            return newState;

        case ActionTypes.CLEAR_VARS:
            newState = {...state};
            delete newState[action.key];
            return newState;

        case ActionTypes.SET_VARS:

            order = (action.value || {}).order || 1;

            return {
                ...state,
                r1: {...action.value, order},
                r2: {...action.value, order},
                r3: {...action.value, order},
                r4: {...action.value, order},
            }

        case ActionTypes.MERGE_VARS:

            order = (action || {}).order || 1;

            return {
                ...state,
                r1: {...state['r1'], ...action.value, order},
                r2: {...state['r2'], ...action.value, order},
                r3: {...state['r3'], ...action.value, order},
                r4: {...state['r4'], ...action.value, order},
            }
    }
}

export const data = (state, action) => {
    let newState;

    switch (action.type) {
        case ActionTypes.APPLY_VARS:
            newState = {...state};
            newState.vars = vars(state.vars, action);
            return newState;

        case ActionTypes.APPLY_STYLE:
            newState = {...state};
            newState.vars = vars(state.vars, action);
            return newState;

        case ActionTypes.CLEAR_VARS:
            newState = {...state};
            newState.vars = vars(state.vars, action);
            return newState;

        case ActionTypes.SET_VARS:
        case ActionTypes.MERGE_VARS:

            newState = {...state};
            newState.vars = vars(state.vars, action);
            return newState;

        case ActionTypes.APPLY_DATA:

            newState = {...state};
            newState.content = action.data.content;

            return newState;

        case ActionTypes.APPLY_ROLE:

            newState = {...state};
            newState.role = action.role;

            return newState;

        case ActionTypes.RENAME_LAYER:

            newState = {...state};
            newState.layer = action.value;

            return newState;

        case ActionTypes.RENAME_TAG:

            newState = {...state};
            newState.tag = action.value;

            return newState;

        case ActionTypes.APPLY_CLASS:

            newState = {...state};
            newState.className = action.value;

            return newState;

        case ActionTypes.EXPAND_VIEW:

            newState = {...state};
            newState.isClosed = action.isClosed;

            return newState;

        case ActionTypes.APPLY_DATA_FIELD:

            newState = {...state};
            newState.dataField = action.fieldName;
            newState.dataFieldType = action.fieldType;

            return newState;

        case ActionTypes.APPLY_STYLE_FIELD:

            newState = {...state};
            newState.styleField = styleField(newState.styleField, action);

            return newState;


        default:
            return state
    }

}

export const element = (state, action) => {

    let newState;

    switch (action.type) {
        case ActionTypes.ADD_ELEMENT:
            return {
                id: action.id,
                parent_id: action.parent_id,
                elementType: action.elementType,
                style: action.style || {},
                data: action.data || {},
                childIds: []
            }
        case ActionTypes.REPLACE_ELEMENT:

            if (state.id !== action.id) {
                return state
            }

            return action.newElement;

            return {};
        case ActionTypes.APPLY_STYLE:
            if (state.id !== action.id) {
                return state
            }

            newState = {...state};
            newState.style = {...newState.style, ...action.style};
            newState.data = data(newState.data, action);

            return newState;

        case ActionTypes.APPLY_VARS:
        case ActionTypes.SET_VARS:
        case ActionTypes.MERGE_VARS:
        case ActionTypes.CLEAR_VARS:
        case ActionTypes.APPLY_DATA:
        case ActionTypes.APPLY_DATA_FIELD:
        case ActionTypes.APPLY_STYLE_FIELD:
        case ActionTypes.APPLY_ROLE:
        case ActionTypes.RENAME_TAG:
        case ActionTypes.RENAME_LAYER:
        case ActionTypes.EXPAND_VIEW:
        case ActionTypes.APPLY_CLASS:

            if (state.id !== action.id) {
                return state
            }

            newState = {...state};
            newState.data = data(newState.data, action);

            return newState;

        case ActionTypes.PREVIEW_STYLE:
            if (state.id !== action.id) {
                return state
            }

            newState = {...state};
            newState.style = {...newState.style, ...action.style};

            return newState;

        case ActionTypes.LOAD_RESOLUTION:
            const _data = state.data,
                vars = _data.vars || {},
                style = vars[action.value] || {};

            newState = {...state};
            newState.style = {...style};

            return newState;

        case ActionTypes.DELETE_ELEMENT:

            let childIds = state.childIds || [];

            if (action.id === state.id) {
                return null;
            }

            // is it the father?
            if (childIds.indexOf(action.id) >= 0) {
                state.childIds = state.childIds.filter(id => id !== action.id);
            }

            if (action.deleteIds.indexOf(state.id) >= 0) {

                action.deleteIds = [...action.deleteIds, ...childIds];
                return null;
            } else {
                return state;
            }

        default:
            return state
    }
}

export const elements = (state = {}, action) => {
    let newElement,
        newState;

    switch (action.type) {
        case ActionTypes.ADD_ELEMENT:

            newElement = element(undefined, action);
            newElement.data = data(newElement.data, {
                type: ActionTypes.SET_VARS,
                value: newElement.style
            });

            let found = false;

            newState = map(state, element => {
                if (newElement.parent_id === element.id) {
                    found = true;
                    const childIds = element.childIds || [];
                    element.childIds = [...childIds, newElement.id];
                    return element;
                } else {
                    return element;
                }
            });

            // parent does not exist
            if (!found && newElement.parent_id) {
                return state;
            }

            newState[action.id] = newElement;

            return newState;

        case ActionTypes.REPLACE_ELEMENT:

            let targetElement = find(state, _element => _element.id === action.id);

            newElement = element(undefined, {...action, type: ActionTypes.ADD_ELEMENT});
            newElement.id = action.id;
            newElement.style = {...targetElement.style, ...action.style};

            if (targetElement.style.order || newElement.style.order) {
                newElement.style.order = targetElement.style.order || newElement.style.order;
            }

            const {style} = targetElement || {},
                {order} = style || {};

            newElement.data = data(targetElement.data, {
                type: ActionTypes.MERGE_VARS,
                value: action.style,
                order,
            });

            action.newElement = newElement;

            return map(state, e => {
                return element(e, action);
            })

            return {};

        case ActionTypes.APPLY_STYLE:
            return map(state, e => {
                return element(e, action);
            })

        case ActionTypes.CLEAR_ELEMENTS:
            return {};

        case ActionTypes.REMOVE_ELEMENTS:
            return filter(state, e => {

                let childIds = e.childIds || [];

                e.childIds = childIds.filter(id => action.ids.indexOf(id + '') < 0);

                return action.ids.indexOf(e.id + '') < 0;
            })

        case ActionTypes.SET_ELEMENTS:
            return action.value;

        case ActionTypes.APPLY_VARS:
        case ActionTypes.CLEAR_VARS:
        case ActionTypes.APPLY_CLASS:
        case ActionTypes.APPLY_DATA:
        case ActionTypes.APPLY_DATA_FIELD:
        case ActionTypes.APPLY_STYLE_FIELD:
        case ActionTypes.APPLY_ROLE:
        case ActionTypes.PREVIEW_STYLE:
        case ActionTypes.RENAME_TAG:
        case ActionTypes.RENAME_LAYER:
        case ActionTypes.EXPAND_VIEW:
        case ActionTypes.LOAD_RESOLUTION:
            return map(state, e => {
                return element(e, action);
            })

        case ActionTypes.SWITCH_ELEMENTS_ORDER:

            const orders = map(
                filter(state, e => e.id === action.id1 || e.id === action.id2),
                e => e.style.order
            );

            return map(state, e => {
                e.style = {...e.style};
                if (e.id === action.id1) {
                    e.style.order = orders[action.id2];
                } else if (e.id === action.id2) {
                    e.style.order = orders[action.id1];
                }

                return e;
            })

        case ActionTypes.DELETE_ELEMENT:

            const element_for_deletion = state[action.id];

            if (!element_for_deletion || element_for_deletion.parent_id === 0) {
                return state;
            }

            const childIds = element_for_deletion.childIds || [];
            action.deleteIds = [...childIds];

            newState = map(state, e => {
                return element(e, action);
            });

            return filter(newState, element => element !== null);

        default:
            return state
    }
}

const undoableElement = undoable(elements, {
    limit: 20,
    filter: excludeAction([ActionTypes.PREVIEW_STYLE, ActionTypes.PREVIEW_DATA, ActionTypes.SET_ELEMENTS])
})

export default undoableElement
