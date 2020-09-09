
import React, { useState, useEffect } from "react";
import style from "./useThemeSwitcher.css";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
    />
  );
};

const useThemeSwitcher = () => {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  return (
    <a
      className="cursor-pointer"
      onClick={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))}
    >
      <div className="containerMode">
        <DarkModeButton>{mode === "dark" ? "Light" : "Dark"}</DarkModeButton>
      </div>
    </a>
  );
};

export default useThemeSwitcher;