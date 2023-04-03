import React, { useState, useEffect } from "react";

//useEffect is used to manage one of the lifecyle methods
//life cycle methods are:
//componentDidMount : runs when component mounts(/attached) on DOM
//componentDidUpdate: when state changes and component re-renders on DOM
//componentWillUnmount: when component unmount from DOM

function HookUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(
    () => {
      console.log("useeffect");
      document.title = `button clicked ${count} times`;
    } /*dependency array(DArr)like in this case DArr may be [count] or [setCount] */
  );
  //   when at the place of dependency array there is nothing then
  // useState acts like componentDidMount and componentDidUpdate both

  //when we give [] empty array as dependency then only works after 1st time render
  //which means with [] only, useEffect works as componentDidMount
  return (
    <div>
      <h1>The Current Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment count by 1</button>
    </div>
  );
}

export default HookUseEffect;
