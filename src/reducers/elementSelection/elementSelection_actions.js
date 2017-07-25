import {ActionTypes} from './elementSelection';
import {getFlexState} from '../../utils/utils';

/*
 SET_SELECTED_ELEMENT
 SET_ELEMENT_DOM
 */

const setSelectedElement = (id, parent_id, elementType) => {

    return {
        type: ActionTypes.SET_SELECTED_ELEMENT,
        id,
        parent_id,
        elementType,
        silent: true,
    }
}

const setElementRect = (elementRect) => {

    return {
        type: ActionTypes.SET_ELEMENT_RECT,
        rect: elementRect,
        silent: true,
    }
}

//@formatter:off
/*
  _____ _  _ _   _ _  _ _  _____
 |_   _| || | | | | \| | |/ / __|
   | | | __ | |_| | .` | ' <\__ \
   |_| |_||_|\___/|_|\_|_|\_\___/

 */
//@formatter:on

const findOtherElement = (id) => {
    let elementDOM;

    while (!elementDOM && id > 0) {
        id--;
        elementDOM = document.querySelector(`#element-${id}`);
    }

    return elementDOM;
}

const refreshSelector = (delay = 0) => {
    return (dispatch, getState) => {

        let {elementSelection} = getFlexState(getState());
        let {id} = elementSelection;

        setTimeout(() => {

            let elementDOM = document.querySelector(`#element-${id}`);

            // maybe undo action which removed selected object
            if (!elementDOM) {
                elementDOM = findOtherElement(id);
            }

            if (!elementDOM) {
                return;
            }

            const rect = elementDOM.getBoundingClientRect();
            dispatch(setElementRect(rect));
        }, delay)
    }
}

const setSelectedElementAndRefresh = (id, parent_id, elementType) => {

    return (dispatch, getState) => {
        dispatch(setSelectedElement(id, parent_id, elementType));
        dispatch(refreshSelector(20));
    }

}

export default {
    setSelectedElement,
    setElementRect,
    findOtherElement,
    refreshSelector,
    setSelectedElementAndRefresh,
}