import { createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  DarkModeProvider.propTypes = {
    children: PropTypes.node,
  };

  const [isDarkMode, setDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const contex = useContext(DarkModeContext);

  if (contex === undefined)
    throw new Error("DarkModeContext was used outside DarkModeProvider");

  return contex;
}

export { DarkModeProvider, useDarkMode };
