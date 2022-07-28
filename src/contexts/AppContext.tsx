import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type AppContextType = {
    isLoggedIn: boolean,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

type AppContextValue = {
    children: ReactNode
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: FC<AppContextValue> = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        isLoggedIn ? navigate('/welcome') : navigate('/');
    }, [isLoggedIn])

    return <AppContext.Provider
        value={{isLoggedIn, setIsLoggedIn}}
    >{children}</AppContext.Provider>
}

export const useAppContext = () =>  useContext(AppContext)