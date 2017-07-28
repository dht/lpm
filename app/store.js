import {createStore} from 'redux'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import reducers from '../src/actions/index';

const reduxApp = combineReducers({
    elements: reducers.elements,
    routing: routerReducer,
})

export default createStore(reduxApp,  window.devToolsExtension ? window.devToolsExtension() : f => f);