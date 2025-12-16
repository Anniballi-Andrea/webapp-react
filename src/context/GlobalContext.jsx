import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [loader, setLoader] = useState(false)

    const value = {
        loader,
        setLoader
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalProvider() {

    const context = useContext(GlobalContext)
    return context
}

export { GlobalProvider, useGlobalProvider }