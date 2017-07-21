export const parse = (value) => {

    if (value === 'none') {
        return value;
    }

    return parseInt(value, 10);
}

export default parse;