const initialState = {
    copiedElement: {},
    copiedStyle: {},
}

const prefix = 'FLEX_';

const ActionTypes = {
    SET_COPIED_STYLE: `${prefix}SET_COPIED_STYLE`,
    SET_COPIED_ELEMENT: `${prefix}SET_COPIED_ELEMENT`,
};

const clipboard = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.SET_COPIED_STYLE:
        case ActionTypes.SET_COPIED_ELEMENT:
            return {...state, copiedStyle: action.value};

        default:
            return state
    }

}

export default clipboard;
