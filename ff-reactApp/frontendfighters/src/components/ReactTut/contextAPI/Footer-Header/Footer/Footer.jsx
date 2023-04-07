import React, { useContext } from "react";
import "./Footer.css";
import FooterContext from "../FooterContext";

function Footer() {
  const themes = useContext(FooterContext);

  const handleThemeChange = () => {
    const newTheme = themes.theme === "light" ? "dark" : "light";
    themes.setTheme(newTheme);
  };

  return (
    <div>
      <footer className="footer">
        <button className="btn" onClick={handleThemeChange}>
          Change theme
        </button>
      </footer>
    </div>
  );
}
export default Footer;
