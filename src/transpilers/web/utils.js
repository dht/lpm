
export const childrenByParentId = (state, parent_id) => {
    Object.keys(state).reduce((output, element_id) => {
        const element = state[element_id] || {};

        if (parent_id === element.parent_id) {
            output[element_id] = element;
        }

        return output;

    }, {})
}