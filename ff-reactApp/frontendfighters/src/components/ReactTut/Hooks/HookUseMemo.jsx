import React, { useEffect, useMemo, useState } from "react";

//use memo is used for memoization
//read about memoization in JS at jsconcepts folder in memoization.js file ><

// in the code below we have a long function i.e., slowFunction which gets called everytime we render our app
//to memoize this long function we are using useMemo
//also usememo is used in referential equality
//if I copy exact object 'themeStyles' and make another object 'themeStyles2'
//then remember they are not same in JS, both have diff reference in JS

function HookUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed successfully");
  }, [themeStyles]);
  //themeStyles != themeStyles although their properties are same

  const themeStyles2 = {
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
function slowFunction(num) {
  console.log("slow function");
  for (let i = 0; i <= 1000000000; i++) {}

  return num * 2;
}

export default HookUseMemo;
