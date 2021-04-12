import { createStore } from 'redux';
import { lemonadeReducer } from './index';
import thunk from 'redux-thunk'
import { applyMiddleware } from '@reduxjs/toolkit';

const store = createStore(lemonadeReducer, applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
