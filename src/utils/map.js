export const map = (object, callback) => {
	return Object.keys(object).reduce(function (output, key) {

		output[key] = callback.call(this, object[key]);

		return output;
	}, {});
}

export const mapPairs = (object, callback) => {
	return Object.keys(object).reduce(function (output, key) {

		output[key] = callback.call(this, key, object[key]);

		return output;
	}, {});
}

export const mapCopy = (object, callback) => {
	return Object.keys(object).reduce(function (output, key) {

		output[key] = callback.call(this, {...object[key]});

		return output;
	}, {});
}

export const reduce = (object, callback, start) => {
	return Object.keys(object).reduce(function (output, key) {

		return callback.call(this, output, object[key]);
	}, start);
}

export const reduceCopy = (object, callback, start) => {
	return Object.keys(object).reduce(function (output, key) {

		return callback.call(this, output, {...object[key]});
	}, start);
}


export const mapElements = (object, callback) => {
	return Object.keys(object).reduce(function (output, key) {

		let newElement = {...object[key]};
		newElement.style = {...newElement.style};
		newElement.data = {...newElement.data};
		output[key] = callback.call(this, newElement);

		return output;
	}, {});
}

export const find = (object, callback) => {
	let output = {};

	Object.keys(object).forEach(function (key) {

		if (callback.call(this, object[key])) {
			output = object[key];
		}
	});

	return output;
}

export const 	filterCopy = (object, callback) => {
	return Object.keys(object).reduce(function (output, key) {

		if (callback.call(this, object[key])) {
			output[key] = {...object[key]};
		}

		return output;
	}, {});
}

export const firstChild = (object) => {
	let output= {};

	const keys = Object.keys(object);

	if (keys && keys.length > 0) {
		output = object[keys[0]];
	}

	return output;
}

export const forEach = (object, callback) => {
	return Object.keys(object).forEach(function (key) {

		callback.call(this, object[key]);

	});
}


export default mapCopy;
