import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

// Redux Store creation (Application state), it need to know about reducers, since they can modify the state
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

// Main application entry point, app component
ReactDOM.render(
        <Provider store={ createStoreWithMiddleware(reducers) }>
            <App />
        </Provider>
        , document.getElementById('root'));

registerServiceWorker();
