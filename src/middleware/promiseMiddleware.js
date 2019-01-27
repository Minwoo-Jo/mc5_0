import lc from './lc.js'


export default () => {
    return next => action => {
        console.log(action)
        const { type, result } = action;
        next({ result, type: `${type}_REQUEST` });

        switch (action.type) {
            case "LOGIN":
                return { code: "teST" }
            case "RUN":
                return next({ result: lc.run('<SRC>', action.result, { predefined: true, timeLimit: 1 }), type: `${type}_SUCCESS` });
            case "SELECTMENU":
                return next({ result: action.result, type: `${type}_SUCCESS`})
            case "SELECT_PROBLEM":
                return null

            case "KEYDOWN":
                return null
        };

    }

};