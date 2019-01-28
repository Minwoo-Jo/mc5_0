export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (id, password) => {
    console.log(id + password)
  return {
    
    type: LOGIN,
    promise: { method: 'post', url: 'http://143.248.38.120:80/login', data: { id, password } }
  };
};