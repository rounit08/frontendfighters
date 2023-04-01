import React from "react";

function This() {
  //'this' keyword represents current object

  console.log(this); //undefined logged because it represents window object
  function fn() {
    console.log(this);
  }
  let obj = {
    name: "rounit",
    func: fn,
  };

  obj.func(); // logged object "obj" because this inside the function

  return <div>this keyword</div>;
}

export default This;
