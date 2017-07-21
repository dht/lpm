import css from './css';

export const parseRule = (key, value) => {
    if (css[key]) {
        value = css[key](value);
    }

    if (value === '') {
        return null;
    }

    let output = {};
    output[key] = value;

    return output;
}

export const parseCss = (style) => {

    return Object.keys(style).reduce((output, key) => {
        
        const value = style[key];

        if (value === '') {
            return output;
        }

        const newRule = parseRule(key, value);

        if (newRule === null) {
            return output;
        }

        return {...output, ...newRule}
    }, '');
}

