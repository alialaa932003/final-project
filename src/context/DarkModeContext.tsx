import { createContext, useContext, useLayoutEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext({
   isDarkMode: false,
   toggleDarkMode: () => {},
});

function DarkModeProvider({ children }: any) {
   const [isDarkMode, setIsDarkMode] = useLocalStorageState(
      window.matchMedia("(prefers-color-scheme: dark)").matches.toString(),
      "isDarkMode",
   );

   useLayoutEffect(
      function () {
         if (isDarkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
         } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
         }
      },
      [isDarkMode],
   );

   function toggleDarkMode() {
      setIsDarkMode((isDark: boolean) => !isDark);
   }

   return (
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
         {children}
      </DarkModeContext.Provider>
   );
}

function useDarkMode() {
   const context = useContext(DarkModeContext);
   if (context === undefined)
      throw new Error("DarkModeContext was used outside of DarkModeProvider");
   return context;
}

export { DarkModeProvider, useDarkMode };
