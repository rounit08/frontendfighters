import React, { useState } from "react";
// import useState from react like this

// while writing functional component any javascript part can be written
// inside function but only before return statement in the function

// useSTATE is used to define state for components
function HookUseState() {
  const [count, setCount] = useState(0);
  //count and setCount are managing state
  // anything inside (__anything__) of useState refres to the current state which is 0 in this case

  //count holds state  and setCount is a function, see line 16,
  // setCount(count+1)
  return (
    <div>
      <h1>CURRENT COUNT {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment count by 1</button>
    </div>
  );
}

export default HookUseState;
