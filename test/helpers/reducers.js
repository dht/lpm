import {combineReducers} from 'redux'

import elements from '../../src/reducers/elements/elements';
import elementSelection from '../../src/reducers/elementSelection/elementSelection';
import clipboard from '../../src/reducers/clipboard/clipboard';

const flexState = combineReducers({
    elements,
    elementSelection,
    clipboard,
})

const reducers = combineReducers({
    flexState,
})


export default reducers;