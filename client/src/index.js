
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';


import App from './App';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
    rootReducer,
    middleware
);

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
document.getElementById('root'));

