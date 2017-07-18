function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '').replace('-', '');
}


export const getFieldType = (fieldName) => {
    switch (fieldName) {
        case 'flex':
            return 'NUMERIC';
        default:
            return 'STRING';
    }
}

export const parseStyle = (style) => {
    const regexSelector = /\.([^{]+){/gi;
    const matches = style.match(regexSelector);

    if (!matches.length) {
        return;
    }

    const selector = matches[0]
        .replace('.', '')
        .replace('{', '')
        .trim();

    style = style.replace(matches[0], '').replace('}', '');

    let output = camelize(selector) + ': {\n';

    style.split(';').forEach(rule => {
        const parts = rule.split(':');

        if (parts.length === 2) {
            let key = camelize(parts[0].trim()),
                value = parts[1].trim();

            if (getFieldType(key) === 'STRING') {
                value = "'" + value + "'";
            }


            output += '\t' + key + ': ' + value + ',\n'
        }
    })

    output += '}';
    
    console.log('output -> ', output);

    return output;
}