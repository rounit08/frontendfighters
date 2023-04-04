import React, { useEffect, useRef, useState } from "react";

//useState will update the component but useRef will not
//useref is used to make a reference of html and change it only without rendering all elems
//as in JS and HTML we take reference of one element  using document.getElementBy X/Y/Z
//with useRef we do same thing and assign the elemnt to vriable to manipulate that
//useRef stores whole element but useState stores state of element
function HookUseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  //basically this usRef will return an object
  // {current: 0} thisobj wil have only one property called current property

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current}</div>
    </>
  );
}

export default HookUseRef;
