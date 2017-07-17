export const parse = (value) => {

    if (value && (value + '').indexOf('%') < 0) {
        value = parseInt(value, 10) + 'px';
    }
    
    return value;
}

export default parse;