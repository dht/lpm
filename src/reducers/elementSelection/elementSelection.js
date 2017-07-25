let initialState = {
	id: 0,
	parent_id: 0,
	elementType: '',
	rect: {}
};

const prefix = 'FLEX_';

export const ActionTypes = {
    SET_SELECTED_ELEMENT: `${prefix}SET_SELECTED_ELEMENT`,
    SET_ELEMENT_RECT: `${prefix}SET_ELEMENT_RECT`,
};

const elementSelection = (state = initialState, action) => {

	switch (action.type) {

		case ActionTypes.SET_SELECTED_ELEMENT:

			return {
				...state,
				id: action.id,
				elementType: action.elementType,
				parent_id: action.parent_id
			};

		case ActionTypes.SET_ELEMENT_RECT:
			return {
				...state,
				rect: action.rect
			}

		default:
			return state
	}
}

export default elementSelection
