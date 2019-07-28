
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import {BrowserRouter as Router} from 'react-router-dom';




import App from './App';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
    rootReducer,
    middleware
);

ReactDOM.render(
    <Router>
        <Provider store = { store }>
            <App />
        </Provider>
    </Router>,
document.getElementById('root'));

