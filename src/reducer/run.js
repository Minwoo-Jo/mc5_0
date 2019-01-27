import { combineReducers } from 'redux';
import { run, RUN_REQUEST, RUN_SUCCESS, RUN_FAILURE } from '../action/run.js';

const defaultState = {
    fetchingUpdate: false,
    code: {}
};

const runReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RUN_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case RUN_SUCCESS:
            console.log("!!!!!!")
            console.log(action)
            return {
                fetchingUpdate: true,
                code: action.result
            };
        case RUN_FAILURE:
            return {
                ...state,
                fetchingUpdate: false
            };

    }
    return { ...state }
};
export default runReducer;

// export default combineReducers({
//     run: runReducer
// });
