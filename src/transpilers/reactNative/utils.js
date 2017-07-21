
export const childrenByParentId = (state, parent_id) => {
    Object.keys(state).reduce((output, element_id) => {
        const element = state[element_id] || {};

        if (parent_id === element.parent_id) {
            output[element_id] = element;
        }

        return output;

    }, {})
}

export const selectorFromElementType = (elementType) => {
    switch (elementType) {
        case 'TEXT':
            return 'text';
        case 'IMAGE':
            return 'image';
        case 'VIEW':
            return 'view';
        default:
            return 'element';
    }
}

const _sortByOrder = function (a, b) {
    const sa = a.style || {},
        sb = b.style || {};

    if (sa.order < sb.order)
        return -1;
    if (sa.order > sb.order)
        return 1;
    return 0;
}

export const sortChildId = (state, childIds) => {

    return childIds
        .map(childId => state[childId])
        .sort(_sortByOrder)
        .map(element => element.id);
}

