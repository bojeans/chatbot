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
    <div className="flex justify-center items-center h-screen">
      <button
        className={`dark-mode-toggle ${darkMode ? "dark" : "light"} p-2`}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <IoSunnyOutline className="text-4xl" />
        ) : (
          <MdOutlineDarkMode className="text-4xl" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
