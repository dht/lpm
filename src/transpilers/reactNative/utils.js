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

export const formatComponent = (componentName = 'Layout', dependencies = [], jsx = '', style = {}) => {
    return `import React, { Component } from 'react';
import {
    ${dependencies.join(',\n\t')}
} from 'react-native';

export default class ${componentName} extends Component {
    render() {
        return (
           ${jsx}
        );
    }
}

const styles = StyleSheet.create(${style});`
}

// https://stackoverflow.com/a/3809435/172815
export const isUrl = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    return regex.test(url);
}

export const urlFromBackgroundUrl = (backgroundUrl) => {
    const regex = /url\(['"]?([^"')]+)/;

    if (!regex.test(backgroundUrl)) {
        return isUrl(backgroundUrl) ? backgroundUrl : '';
    }

    const matches = backgroundUrl.match(regex);

    return matches.length > 1 ? matches[1] : ''
}