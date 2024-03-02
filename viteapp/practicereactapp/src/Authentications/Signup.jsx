import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    navigate("/login");
  };
  return (
    <div className="authentication">
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already a user? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
