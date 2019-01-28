export const RUN = 'RUN';
export const RUN_REQUEST = 'RUN_REQUEST';
export const RUN_SUCCESS = 'RUN_SUCCESS';
export const RUN_FAILURE = 'RUN_FAILURE';


export const run = (code) => {
    console.log("action")
    console.log(code)
    return {
        type: RUN,
        result: code,
        promise:null
    };
};