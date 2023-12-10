import React from "react";
import { useDarkMode } from "./DarkModeContext";

import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button
      className={`dark-mode-toggle ${darkMode ? "dark" : "light"}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? <IoSunnyOutline /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default DarkModeToggle;
