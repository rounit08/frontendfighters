import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let nameofuser = localStorage.getItem("username");
    let passofuser = localStorage.getItem("password");

    if (username === nameofuser && password === passofuser) {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="input">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          placeholder="Enter username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          autoComplete="off"
        />
        <button onClick={handleLogin}>Login</button>
        <Link to="/signup" className="signup">
          Not have an account, signUP
        </Link>
      </div>
    </div>
  );
}

export default Login;
