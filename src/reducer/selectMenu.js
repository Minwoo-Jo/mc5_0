import { combineReducers } from 'redux';
import { selectMenu, MENU_REQUEST, MENU_SUCCESS, MENU_FAILURE } from '../action/selectMenu.js';


const defaultState = {
    fetchingUpdate: false,
    index: 0,
    text : ''
};

const menuReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MENU_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case MENU_SUCCESS:
        console.log("TEST MENU")
            console.log(action)
            return {
                fetchingUpdate: true,
                index: action.result.data.index,
                text : action.result.data.text
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
