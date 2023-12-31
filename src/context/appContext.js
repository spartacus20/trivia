import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider = ({ reducer, initialState, children }) => {


  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  )
};


export const useAppValue = () => useContext(AppContext);