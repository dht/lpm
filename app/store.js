import {createStore} from 'redux'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import elements from './reducers/elements';

const reduxApp = combineReducers({
    elements,
    routing: routerReducer,
})

export default createStore(reduxApp);