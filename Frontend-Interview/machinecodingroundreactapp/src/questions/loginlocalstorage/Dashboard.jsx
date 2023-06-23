import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    alert("You have been logged out");
    navigate("/");
  };
  return (
    <div>
      Dashboard <br />
      Hello {username} <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
