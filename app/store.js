import {createStore} from 'redux'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import elements from '../src/reducers/elements/elements';

const reduxApp = combineReducers({
    elements,
    routing: routerReducer,
})

export default createStore(reduxApp,  window.devToolsExtension ? window.devToolsExtension() : f => f);