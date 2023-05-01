import FormContext from "./FormContext";
import { useState } from "react";

function FormState(props) {
  const [loggedIn, setLoggedIn] = useState({
    loggedIn: false,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(loggedIn);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const value = {
    loggedIn,
    setLoggedIn,
    username,
    setUsername,
    password,
    setPassword,

    handleLogout,
  };

  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  );
}

export default FormState;
