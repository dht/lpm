export const ActionTypes = {
    SET_ELEMENTS: 'SET_ELEMENTS',
}

export const setElements = (value) => {

    return {
        type: ActionTypes.SET_ELEMENTS,
        value
    }
}


