import React, { useState } from "react";
import FooterContext from "./FooterContext";
import "./Footer/Footer.css";
import "./Navbar/Navbar.css";

function FooterState(props) {
  const [theme, setTheme] = useState("light");

  const value = { theme, setTheme };
  return (
    <FooterContext.Provider value={value}>
      {props.children}
    </FooterContext.Provider>
  );
}

export default FooterState;
