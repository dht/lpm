import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/AppContainer'
import Example from './components/Example/Example'

injectTapEventPlugin();

let rootElement;

const onEnter = (location) => {
    document.location.hash = 'simple';
}

const renderStore = () => {
    rootElement = document.getElementById('root')

    render(
        <MuiThemeProvider>
                <Provider store={store}>
                    <Router history={ hashHistory }
                            routes={[
                                {path: '/', component: App, onEnter: onEnter},
                                {path: '/simple', component: Example},
                            ]}/>
                </Provider>
        </MuiThemeProvider>
        ,rootElement
    );
}

renderStore();
