import { combineReducers } from 'redux';
import { selectMenu, MENU_REQUEST, MENU_SUCCESS, MENU_FAILURE } from '../action/selectMenu.js';

const defaultState = {
    fetchingUpdate: false,
    index: {}
};

const menuReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MENU_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case MENU_SUCCESS:
            console.log("!!!!!!")
            console.log(action)
            return {
                fetchingUpdate: true,
                index: action.result
            };
        case MENU_FAILURE:
            return {
                ...state,
                fetchingUpdate: false
            };

    }
    return { ...state }
};
export default menuReducer;

// export default combineReducers({
//     run: runReducer
// });
