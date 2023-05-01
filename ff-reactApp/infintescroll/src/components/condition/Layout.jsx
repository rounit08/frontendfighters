import React, { useContext } from "react";
import FormContext from "../../context/FormContext";
import Login from "../Login/Login";
import Home from "../home/Home";

function Layout() {
  const form = useContext(FormContext);
  const login = form.loggedIn.loggedIn;
  console.log(form);
  return login ? <Home /> : <Login />;
}

export default Layout;
