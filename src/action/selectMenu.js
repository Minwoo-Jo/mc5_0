export const SELECTMENU = 'SELECTMENU';
export const MENU_REQUEST = 'SELECTMENU_REQUEST';
export const MENU_SUCCESS = 'SELECTMENU_SUCCESS';
export const MENU_FAILURE = 'SELECTMENU_FAILURE';

export const selectMenu = (index) => {
   return {
    
    type: SELECTMENU,
    result : index
  };
};