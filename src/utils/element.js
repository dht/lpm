export const placeholderInnerText = (style = {}) => {

    const flex = style.flex,
        width = style.width,
        height = style.height;

    if (flex) {
        return `flex${flex}`;
    }

    if (width && height) {
        return `${width} x ${height}`;
    }

    if (width) {
        return `${width}`;
    }

    return '';
}

export const getStatePath = (state, statePath = '') => {

    let cursor = state;

    const parts = statePath.split('/');

    if (!statePath || parts.length === 0) {
        return {};
    }

    parts.forEach(part => {
        if (cursor[part]) {
            cursor = cursor[part];
        } else {
            cursor = {};
        }
    });

    return cursor;
}