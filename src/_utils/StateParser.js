export const firebaseObjectToObject = (objects) => {

    return Object.keys(objects).reduce((output, key) => {
        let object = objects[key];
        output[object.id] = object;
        return output;
    }, {});
}