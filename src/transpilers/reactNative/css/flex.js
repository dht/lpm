export const parse = (value) => {

    if (value.trim() === 'none') {
        return value;
    }

    return parseInt(value, 10);
}

export default parse;