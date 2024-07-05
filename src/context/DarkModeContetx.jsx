import { createContext, useContext } from "react";
import PropTypes from "prop-types";

import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  DarkModeProvider.propTypes = {
    children: PropTypes.node,
  };

  const [isDarkMode, setDarkMode] = useLocalStorageState(false, "isDarkMode");

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
