
const mock = store => next => action => {

    let result = next(action);

    return result
}

export default mock;
