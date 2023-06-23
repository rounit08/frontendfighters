import logo from "./logo.svg";
import "./App.css";
import Counter from "./questions/counter/Counter";
import DarkLight from "./questions/dark/lightmode/DarkLight";
import Carousel from "./questions/carousel/Carousel";
import Login from "./questions/loginlocalstorage/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./questions/loginlocalstorage/Signup";
import Dashboard from "./questions/loginlocalstorage/Dashboard";

function App() {
  // const api = "https://cataas.com/api/cats	";
  // const slideInterval = 2000;
  return (
    <div className="App">
      {/* <Counter maxValue={100} /> */}
      {/* <DarkLight /> */}
      {/* <Carousel apiUrl={api} slideInterval={slideInterval} /> */}

      {/* <Login /> */}

      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
