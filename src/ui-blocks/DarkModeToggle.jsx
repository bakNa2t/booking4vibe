import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import ButtonIcon from "./ButtonIcon";

import { useDarkMode } from "../context/DarkModeContetx";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const path = window.location.pathname;

  return path === "/signup" ? (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  ) : (
    <ButtonIcon
      onClick={toggleDarkMode}
      popuptext={isDarkMode ? "Light Theme" : "Dark Theme"}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
