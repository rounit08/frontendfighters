import { useState, useEffect } from "react";

// Custom hook to handle theme
const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Update the CSS file based on the current theme
    const cssLink = document.getElementById("theme-css");
    if (cssLink) {
      cssLink.href = `/path/to/${theme}-theme.css`;
    }

    // Store the current theme in local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
