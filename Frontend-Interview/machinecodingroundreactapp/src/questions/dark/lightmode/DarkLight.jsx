import React from "react";
import useTheme from "../UseTheme";
import "./DarkLight.css";

function DarkLight() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`darklight ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Rest of your app */}
    </div>
  );
}

export default DarkLight;
