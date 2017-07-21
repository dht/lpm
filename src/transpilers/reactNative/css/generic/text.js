export const parse = (value) => {

    value = value.replace(/'/g,'');

    return `'${value}'`
}

export default parse;