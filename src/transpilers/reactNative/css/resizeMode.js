export const parse = (value) => {

    const valid = ['cover', 'contain', 'stretch', 'repeat', 'center'];

    if (valid.indexOf(value) >= 0) {
        return value;
    }

    return '';
}

export default parse;