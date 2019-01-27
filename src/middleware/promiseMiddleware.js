import lc from './lc.js'


export default () => {
    return next => action => {
        console.log(action)
        const { type, result } = action;
        next({ result, type: `${type}_REQUEST` });

        switch (action.type) {
            case "LOGIN":
                return next({ result: action.result, type: `${type}_SUCCESS`})
            case "RUN":
                return next({ result: lc.run('<SRC>', action.result, { predefined: true, timeLimit: 1 }), type: `${type}_SUCCESS` });
            case "SELECTMENU":
            console.log("select menu")
                return next({ result: action.result, type: `${type}_SUCCESS`})
            case "SELECTPROBLEM":
            console.log("select problem")
                return next({ result: action.result, type: `${type}_SUCCESS`})

            case "KEYDOWN":
                return null
        };

    }

};