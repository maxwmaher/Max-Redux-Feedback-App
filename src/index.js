import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const Q1 = (state = '', action) => {
    if (action.type === 'Q1') {
        return action.payload
    }
    return state;
}

const Q2 = (state = '', action) => {
    if (action.type === 'Q2') {
        return action.payload
    }
    return state;
}

const Q3 = (state = '', action) => {
    if (action.type === 'Q3') {
        return action.payload
    }
    return state;
}

const Q4 = (state = '', action) => {
    if (action.type === 'Q4') {
        return action.payload
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
    Q1,
    Q2,
    Q3,
    Q4
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
