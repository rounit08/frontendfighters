import React, { useState, useEffect, useContext } from "react";
import FormContext from "../../context/FormContext";
import "./Home.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [numUsersDisplayed, setNumUsersDisplayed] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const form = useContext(FormContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  function logout() {
    form.setLoggedIn({ loggedIn: false });
  }

  function fetchUsers() {
    setIsLoading(true);

    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=20")
        .then((response) => response.json())
        .then((data) => {
          setUsers([...users, ...data.results]);
          setIsLoading(false);
        });
    }, 1000);
  }

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      fetchUsers();
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="home">
      <button className="home-btn" onClick={logout}>
        Log Out
      </button>
      <div className="users">
        <h1>Users List</h1>
        {users.slice(0, numUsersDisplayed).map((user) => (
          <div className="user-details" key={user.email}>
            <p>{`${user.name.first} ${user.name.last}`}</p>

            <img src={user.picture.medium} alt={user.name.first} />
          </div>
        ))}
      </div>
      {isLoading && <p>Loading more...</p>}
    </div>
  );
}

export default Home;
