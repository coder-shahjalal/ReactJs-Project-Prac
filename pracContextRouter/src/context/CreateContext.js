import { createContext, useContext } from "react";


export const MyContext = createContext('right')
export const ThemeContext = createContext ({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

  

export const MyContextProvider = MyContext.Provider
export const ThemeProvider = ThemeProvider.Provider

export default function useMyContext() {
    useContext !== MyContext ? return(useContext(ThemeProvider)) : return(useContext(MyContext))
    
}


