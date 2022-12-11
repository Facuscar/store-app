import { useState, useEffect, createContext } from "react";

const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    return (
        <StoreContext.Provider value={{

        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContext;