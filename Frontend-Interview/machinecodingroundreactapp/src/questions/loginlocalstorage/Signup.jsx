import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (username.length < 6 || password.length < 8) {
      alert(
        "Username must be at least 6 characters long and password must be at least 8 characters long."
      );
      return;
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }

    alert("You have been signed up");
    navigate("/");
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
        <button onClick={handleSignUp}>SignUp</button>
        <Link to="/" className="signup">
          Already have an account, Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
