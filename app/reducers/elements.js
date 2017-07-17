import {ActionTypes} from './elements_actions';
import Elements from '../_data/mock_elements';

const initialState = {
    elements: Elements
};

export const elements = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.SET_ELEMENTS:
            return {
                ...state,
                elements: action.value
            }

        default:
            return state
    }
}

export default elements;
