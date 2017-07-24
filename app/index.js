import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import store from './store';
import actions from '../src/reducers/elements/elements_actions';
import element from './_data/mock_element';
import elements from './_data/mock_elements';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/AppContainer'
import Example from './components/Example/ExampleContainer'
import SnippetView from './components/SnippetView/SnippetView'

injectTapEventPlugin();

let rootElement;

const onEnter = () => {
    document.location.hash = 'simple';
}

const onExample = () => {
    store.dispatch(actions.setElements(elements));
    actions.setId(6);
    store.dispatch(actions.addElement('TEXT', 1, element.style, element.data));
}

const renderStore = () => {
    rootElement = document.getElementById('root')

    render(
                <Provider store={store}>
                    <Router history={ hashHistory }
                            routes={[
                                {path: '/', component: App, onEnter: onEnter},
                                {path: '/simple', component: Example, onEnter: onExample},
                                {path: '/snippets', component: SnippetView},
                            ]}/>
                </Provider>
        ,rootElement
    );
}

renderStore();
