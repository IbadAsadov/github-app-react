import React from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = React.createContext();

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };
    const [state, dispatch] = React.useReducer(GithubReducer, initialState);

    return(
        <GithubContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </GithubContext.Provider>
    )
}
export default GithubContext;