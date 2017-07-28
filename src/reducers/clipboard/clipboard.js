const initialState = {
    copiedElement: {},
    copiedStyle: {},
}

const prefix = 'FLEX_';

export const ActionTypes = {
    SET_COPIED_STYLE: `${prefix}SET_COPIED_STYLE`,
    SET_COPIED_ELEMENT: `${prefix}SET_COPIED_ELEMENT`,
};

const clipboard = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.SET_COPIED_STYLE:
            return {...state, copiedStyle: action.value};

        case ActionTypes.SET_COPIED_ELEMENT:
            return {...state, copiedElement: action.value};

        default:
            return state
    }

}

export default clipboard;
