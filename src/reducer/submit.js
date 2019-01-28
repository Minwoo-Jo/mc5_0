import { combineReducers } from 'redux';
import { run, SUBMIT_REQUEST, SUBMIT_SUCCESS, SUBMIT_FAILURE } from '../action/submit.js';

const defaultState = {
    fetchingUpdate: false,
    code: "",
    js: {}
};

const submitReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SUBMIT_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case SUBMIT_SUCCESS:
        console.log("SUBMIT _ SUCCESS")
        console.log(action.result)
            return {
                
                fetchingUpdate: true,
                code: action.result,
                js : action.js
            };
        case SUBMIT_FAILURE:
            return {
                ...state,
                fetchingUpdate: false
            };

    }
    return { ...state }
};
export default submitReducer;

