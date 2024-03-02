import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedPassword === password && storedUsername === username) {
      navigate("/dashboard");
    } else {
      alert("invalid username or password");
    }
  };
  return (
    <div className="authentication">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        New here? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
