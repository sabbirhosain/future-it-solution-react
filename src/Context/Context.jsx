import { createContext, useContext } from "react"

const AppContextProvider = createContext()
const Context = ({ children }) => {



    return (
        <AppContextProvider.Provider value={{}}>
            {children}
        </AppContextProvider.Provider>
    )
}

export default Context

// coustom hooks
export const useAppContextProvider = () => {
    return useContext(AppContextProvider)
};