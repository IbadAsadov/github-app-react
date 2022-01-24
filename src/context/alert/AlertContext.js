import React from "react";
import AlertReducer from "./AlertReducer";
import {REMOVE_ALERT, SET_ALERT} from "./ActionType";

const AlertContext = React.createContext();

export const AlertProvider = ({children}) => {
    const initialState = null;
    const [state, dispatch] = React.useReducer(AlertReducer, initialState);

    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload:{
                msg, type
            }
        });

        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT
            });
        }, 3000);
    };


    return(
        <AlertContext.Provider value={{
            alert: state, setAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
};
export default AlertContext;