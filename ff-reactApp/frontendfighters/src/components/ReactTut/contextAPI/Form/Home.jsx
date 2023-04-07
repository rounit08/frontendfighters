import React, { useContext } from "react";
import FormContext from "./FormContext";

function Home() {
  const form = useContext(FormContext);

  return (
    <div>
      <h1>Added Profile:</h1>
      <h3>Name : {form.name}</h3>
      <h3>Age : {form.age}</h3>
      <h3>Roll : {form.roll}</h3>
      <h3>Branch : {form.branch}</h3>
    </div>
  );
}

export default Home;
