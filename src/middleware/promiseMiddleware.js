import lc from './lc.js'
import axios from 'axios';


export default () => {
    return next => action => {
        const { type, result, promise, ...rest } = action;
        next({ result, type: `${type}_REQUEST` });

        switch (action.type) {
            case "LOGIN":
            console.log("log in")
                return next({ result: action.result, type: `${type}_SUCCESS`})
            case "RUN":
                return next({ result: lc.run('<SRC>', action.result, { predefined: true, timeLimit: 1 }), type: `${type}_SUCCESS` });
            case "SELECTMENU":
            console.log("select menu")
                return axios({
                    method: promise.method,
                    url: promise.url,
                    data: promise.data
                })
                    .then(result => {
                        if (result.data.result == 1)
                            next({ ...rest, result, type: `${type}_SUCCESS` });
                        else
                            next({ ...rest, result, type: `${type}_FAILURE` });
                    })
                    .catch(error => {
                        next({ ...rest, error, type: `${type}_FAILURE` });
                    });
                
            case "SELECTPROBLEM":
            console.log("select problem")
                return next({ result: action.result, type: `${type}_SUCCESS`})

            case "KEYDOWN":
                return null
        };

    }

};