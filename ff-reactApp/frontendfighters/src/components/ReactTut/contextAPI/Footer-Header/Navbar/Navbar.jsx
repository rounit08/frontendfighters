import React, { useContext } from "react";
import "./Navbar.css";
import FooterContext from "../FooterContext";

const Navbar = () => {
  const themes = useContext(FooterContext);

  return (
    <div>
      <nav
        className={`navbar ${
          themes.theme === "light" ? "navbar-light" : "navbar-dark"
        }`}
      >
        <h1 className="navtext">HELLO NAVBAR</h1>
      </nav>
    </div>
  );
};

export default Navbar;
