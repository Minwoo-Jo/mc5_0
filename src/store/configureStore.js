import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import runReducer from '../reducer/run.js';
import userReducer from '../reducer/user.js'
import promiseMiddleware from '../middleware/promiseMiddleware.js';
import menuReducer from '../reducer/selectMenu.js'
import problemReducer from '../reducer/selectProblem.js'
import submitReducer from '../reducer/submit.js'


const rootReducer = combineReducers({ userReducer,runReducer, menuReducer , problemReducer, submitReducer})



export default function (initialState) {


    const enhancer = compose(applyMiddleware(promiseMiddleware));
    return createStore(rootReducer, initialState, enhancer);
}