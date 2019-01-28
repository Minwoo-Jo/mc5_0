export const SUBMIT = 'SUBMIT';
export const  SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const  SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const  SUBMIT_FAILURE = 'SUBMIT_FAILURE';


export const submit = (code) => {
    console.log(code)
    return {
        type: SUBMIT,
        promise:null

    };
};