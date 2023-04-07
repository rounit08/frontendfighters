import FormContext from "./FormContext";
import { useState } from "react";

const FormState = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleRoll = (e) => {
    setRoll(e.target.value);
  };
  const handleBranch = (e) => {
    setBranch(e.target.value);
  };

  const value = {
    name,
    age,
    roll,
    branch,
    handleAge,
    handleBranch,
    handleName,
    handleRoll,
  };
  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  );
};

export default FormState;
