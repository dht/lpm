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

    }
}

const setElementRect = (elementRect) => {

    return {
        type: ActionTypes.SET_ELEMENT_RECT,
        rect: elementRect,

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

const doc = typeof document !== 'undefined' ? document : {
    querySelector: () => {
        return {
            getBoundingClientRect: () => {
                return {
                    width: 100,
                    height: 100,
                    left: 100,
                    top: 100,
                }
            }
        }
    }
};

const findOtherElement = (id) => {
    let elementDOM;

    while (!elementDOM && id > 0) {
        id--;
        elementDOM = doc.querySelector(`#element-${id}`);
    }

    return elementDOM;
}

const refreshSelector = (delay = 0) => {
    return (dispatch, getState) => {

        let {elementSelection} = getFlexState(getState());
        let {id} = elementSelection;

        let elementDOM = doc.querySelector(`#element-${id}`);

        if (!elementDOM) {
            elementDOM = findOtherElement(id);
        }

        if (!elementDOM) {
            return;
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                const rect = elementDOM.getBoundingClientRect();
                dispatch(setElementRect(rect));
                resolve(true);
            }, delay)
        });
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