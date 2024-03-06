import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
//create initialstate (it is the default value which u want to give.)

const initialstate = {
    transactions: []
};

//create context
export const GlobalContext = createContext(initialstate);
//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate)

    //action
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }
    
    return (<GlobalContext.Provider value={{transactions: state.transactions,
    deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>);
}
