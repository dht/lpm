const _tabs = (number) => {
    let output = '';

    for (let cnt = 0; cnt < number; cnt++) {
        output += '\t';
    }

    return output;
}

const br = (indent) => {
    return '\n' + _tabs(indent);
}

export const whichTag = (html, index) => {
    let inTag = true,
        tag = '';

    const arr = html.split('');

    for (let i = index + 1; i < index + 10; i++) {
        const char = arr[i];

        if (char >= 'a' && char <= 'z' && inTag) {
            tag += char;
        } else if (char !== '/') {
            inTag = false;
        }
    }

    return tag;
}

export const prettifyHtml = (html) => {
    let indent = 0,
        mode = 'IDLE',
        inTag = false,
        tag = '',
        tagToCome = '',
        shouldBreakBefore = false,
        shouldBreakAfter = false,
        breakBefore = ['p', 'ul', 'li'],
        breakAfter = ['div', 'h1', 'h2', 'h3', 'h4', 'p', 'ul', 'li', 'View', 'Image', 'Text'];

    return html
        .split('')
        .reduce((output, char, index) => {

            if (char === '<') {
                tagToCome = whichTag(html, index);
                shouldBreakBefore = tagToCome && breakBefore.indexOf(tagToCome) >= 0;
                mode = 'TAG';
                inTag = true;
                output += (shouldBreakBefore ? br(indent) : '') + '<';
            } else if (char === '/' && mode === 'TAG') {
                mode = 'CLOSING_TAG'
                inTag = true;
                output += '/';
            } else if (char === ' ') {
                inTag = false;
                output += ' ';
            } else if (char === '>') {
                if (mode === 'TAG' || mode === 'CLOSING_TAG') {
                    indent += mode === 'TAG' ? +1 : -1;

                    shouldBreakAfter = breakAfter.indexOf(tag) >= 0;
                    inTag = false;
                    tag = '';
                }
                output += '>';
                output += shouldBreakAfter ? br(indent) : '';
            } else {
                output += char;

                if (inTag) {
                    tag += char;
                }
            }

            return output;
        }, '');
}

export const prettifyScss = (scss) => {
    let indent = 0,
        closeBefore = 0;

    return scss
        .split('')
        .reduce((output, char) => {

            closeBefore++;

            if (char === '{') {
                indent++;
                output += '{' + br(indent);
            } else if (char === '}') {
                indent--;
                output += br(indent) + '}' + (closeBefore > 3 ? '\n' : '') + _tabs(indent);
                closeBefore = 0;
            } else if (char === '.') {
                output += br(indent) + '.';
            } else if (char === ';') {
                output += ';' + br(indent);
            } else {
                output += char;
            }

            return output;
        }, '');
}