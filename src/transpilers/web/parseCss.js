import css from './css';

const camelCaseToCss = (key) => {
    return  key.replace(/([A-Z])/g, function (letter) {
        return '-' + letter.toLowerCase();
    });
}

export const parseRule = (key, value) => {
    const newKey =camelCaseToCss(key);

    if (css[key]) {
        value = css[key](value);
    }

    return `${newKey}: ${value}`;
}

export const parseCss = (style) => {

    return Object.keys(style).reduce((output, key) => {
        
        const value = style[key];

        if (value == '') {
            return output;
        }

        return output + parseRule(key, value) + '; ';
    }, '');
}

export const parseResCss = (allStyles) => {

    return {
        r1: parseCss(allStyles.r1),
        r2: parseCss(allStyles.r2),
        r3: parseCss(allStyles.r2),
        r4: parseCss(allStyles.r3),
    }
}