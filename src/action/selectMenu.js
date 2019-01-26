export const SELECTMENU = 'SELECTMENU';
export const MENU_REQUEST = 'LOGIN_REQUEST';
export const MENU_SUCCESS = 'LOGIN_SUCCESS';
export const MENU_FAILURE = 'LOGIN_FAILURE';

export const selectMenu = (index) => {
   return {
    
    type: SELECTMENU,
    index : index
  };
};