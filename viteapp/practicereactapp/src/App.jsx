import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Login from "./Authentications/Login";
import Signup from "./Authentications/Signup";
import Dashboard from "./Authentications/Dashboard";

function App() {
  // const [imageUrls, setImageurls] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setImageurls(result);
  //     });
  // }, []);

  return (
    <>
      {/* {imageUrls.map((url, index) => (
        <img key={index} src={url.url} alt="image hai bhai" />
      ))} */}
      {/* <Fileexp /> */}
      {/* <Pagination /> */}
      {/* <ApiCall /> */}
      {/* 
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router> */}
      {/* hello vite app here */}
      hello
    </>
  );
}

export default App;
