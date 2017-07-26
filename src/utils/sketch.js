/*
 100    Extra Light or Ultra Light
 200    Light or Thin
 300    Book or Demi
 400    Normal or Regular
 500    Medium
 600    Semibold, Demibold
 700    Bold
 800    Black, Extra Bold or Heavy
 900    Extra Black, Fat, Poster or Ultra Black
 */

const weights = {
    'Light': 200,
    'Medi': 500,
    'Bold': 'bold',
    'Black': 800,
    '100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 'bold',
    '800': 800,
    '900': 900,
};

const regex = /^\/\*[^*]+\*\//g;

export const identify_sketch = (str) => {
    return regex.test(str);
}


const parseFontWeight = (fontWeight) => {
    return weights[fontWeight];

}

const fixFontFamily = (fontFamily) => {
    return fontFamily
        .trim()
        .replace(/([a-z](?=[A-Z]))/g, '$1 ');
}

const parseFontFamily = (fontFamily) => {
    let output = {fontFamily: fontFamily};
    const parts = fontFamily.split('-');

    if (parts.length === 2) {
        const fontWeight = parseFontWeight(parts[1]);
        output['fontFamily'] = fixFontFamily(parts[0]);

        if (fontWeight) {
            output['fontWeight'] = fontWeight;
        }
    }

    return output;
}

const parseCSS = (output, field, value) => {
    field = parseField(field);

    if (field === 'fontFamily') {
        output = {...output, ...parseFontFamily(value)};
    } else {
        output[field] = parseValue(field, value);
    }

    return output;
}


const parseField = (field) => {
    switch (field) {
        case 'font-family':
            return 'fontFamily';
        case 'font-size':
            return 'fontSize';
        case 'color':
            return 'color';
        case 'line-height':
            return 'lineHeight';
        case 'background':
            return 'background-color';
        case 'font-weight':
            return 'fontWeight';
        case 'border':
            return 'border';
    }
}


const parseValue = (field, value) => {
    return value.trim();
}

export const transform_sketch = (str) => {

    const is_sketch_clipboard = identify_sketch(str);

    if (!is_sketch_clipboard) {
        return false;
    }

    return str
        .replace(regex, '')
        .replace(/\n/g, '')
        .split(';')
        .reduce((output, css) => {
            const parts = css.split(':');

            if (parts.length === 2) {
                output = parseCSS(output, parts[0], parts[1]);
            }

            return output;
        }, {});
}