import React, { useState } from "react";

function HookUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  function slowFunction(num) {
    for (let i = 0; i <= 1000000000000000000; i++) {}
    return num * 2;
  }
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default HookUseMemo;
