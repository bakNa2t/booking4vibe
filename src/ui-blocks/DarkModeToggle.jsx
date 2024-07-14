import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import ButtonIcon from "./ButtonIcon";

import { useDarkMode } from "../context/DarkModeContetx";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon
      onClick={toggleDarkMode}
      innerText={isDarkMode ? "Light Theme" : "Dark Theme"}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
