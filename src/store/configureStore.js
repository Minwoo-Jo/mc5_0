import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import runReducer from '../reducer/run.js';
import userReducer from '../reducer/user.js'
import promiseMiddleware from '../middleware/promiseMiddleware.js';
import menuReducer from '../reducer/selectMenu.js'


const rootReducer = combineReducers({ userReducer,runReducer, menuReducer })



export default function (initialState) {


    const enhancer = compose(applyMiddleware(promiseMiddleware));
    return createStore(rootReducer, initialState, enhancer);
}