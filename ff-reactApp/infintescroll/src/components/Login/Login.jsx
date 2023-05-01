import React, { useContext } from "react";
import FormContext from "../../context/FormContext";
import "./Login.css";

function Login() {
  const form = useContext(FormContext);

  const handleLogin = () => {
    console.log("hello");
    if (form.username === "foo" && form.password === "bar") {
      form.setLoggedIn({ loggedIn: true });
    }
  };

  return (
    <div className="login">
      <h2 className="login_title">Login</h2>
      <div className="login_comp">
        <input
          autoComplete="off"
          type="text"
          placeholder="type 'foo' here"
          value={form.username}
          onChange={(e) => form?.setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="type 'bar' here"
          value={form.password}
          onChange={(e) => form?.setPassword(e.target.value)}
        />
        <br />
        <br /> <br /> <br />
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
