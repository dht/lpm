
const mock = store => next => action => {

    let result = next(action);

    console.log('action.type -> ', action.type);

    return result
}

export default mock;
