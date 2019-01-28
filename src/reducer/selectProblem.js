import { combineReducers } from 'redux';
import { selectProblem, PROBLEM_REQUEST, PROBLEM_SUCCESS, PROBLEM_FAILURE } from '../action/selectProblem.js';

const defaultState = {
    fetchingUpdate: false,
    result: ""
};

const problemReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PROBLEM_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case PROBLEM_SUCCESS:
        console.log(action)
            return {
                fetchingUpdate: true,
                result: action.result,
                js : action.js
            };
        case PROBLEM_FAILURE:
            return {
                ...state,
                fetchingUpdate: false
            };

    }
    return { ...state }
};
export default problemReducer;
