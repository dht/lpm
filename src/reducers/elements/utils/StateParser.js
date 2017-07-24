import { mapPairs as map } from './../map'
import equal from 'deep-equal'

const STATUS = {
	DELETED: 'DELETED',
	CHANGED: 'CHANGED',
	NEW: 'NEW',
}

export const remoteStateIds = (remoteState) => {
	return Object.keys(remoteState)
		.reduce((output, key) => { output.push(remoteState[key].id); return output;}, []);
}

export const filterOnlyChangedItems = (remoteState, localState) => {

	return Object.keys(remoteState).reduce((output, key) => {
		const remoteItem = remoteState[key],
			itemId = remoteItem.id,
			localItem = localState[itemId];

		if (!localItem) {
			output[key] = {
				status: STATUS.DELETED
			};
		} else if (!equal(localItem, remoteItem)) {
			output[key] = {
				status: STATUS.CHANGED,
				to: localItem
			}
		}

		return output;
	}, {});
}


	export const findNewItems = (remoteState, localState) => {

	const _remoteStateIds = remoteStateIds(remoteState);

	return Object.keys(localState).reduce((output, key) => {
		const remoteItemExists = _remoteStateIds[key];

		if (!remoteItemExists) {
			output[key] = localState[key];
		}

		return output;
	}, {});
}

export const compare = (remoteState, localState) => {

	const changedItems = filterOnlyChangedItems(remoteState, localState),
		newItems = findNewItems(remoteState, localState);

	return {
		changedItems,
		newItems,
	}
}

export const firebaseStateToState = (firebaseState) => {

	return Object.keys(firebaseState).reduce((output, key) => {
		let element = firebaseState[key];
		output[element.id] = element;
		element.data = element.data || {};
		return output;
	}, {});
}

export const stateToFirebaseState = (state) => {

	return Object.keys(state).reduce((output, key) => {
		let element = state[key];
		output['A' + element.id] = element;
		return output;
	}, {});
}
