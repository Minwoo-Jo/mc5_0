export const SUBMIT = 'SUBMIT';
export const  SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const  SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const  SUBMIT_FAILURE = 'SUBMIT_FAILURE';


export const submit = (code, js) => {
    console.log("!#@!$@#$#!@#@!$@!$#!@$#!@$#!@#$!@#$#@$!@!#$")
    
    console.log(code)
    console.log(js)
    return {
        type: SUBMIT,
        result : code,
        js : js
    };
};