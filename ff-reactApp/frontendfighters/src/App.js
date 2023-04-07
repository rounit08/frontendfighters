import "./App.css";
import Spread from "./components/JSprerequisite/Spread";
import Destructuring from "./components/JSprerequisite/Destructuring";
import FilterAndMap from "./components/JSprerequisite/FilterAndMap";
import This from "./components/JSprerequisite/This";
import HookUseState from "./components/ReactTut/Hooks/HookUseState";
import HookUseEffect from "./components/ReactTut/Hooks/HookUseEffect";
import HookUseMemo from "./components/ReactTut/Hooks/HookUseMemo";
import HookUseRef from "./components/ReactTut/Hooks/HookUseRef";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormState from "./components/ReactTut/contextAPI/Form/FormState";
import Home from "./components/ReactTut/contextAPI/Form/Home";
import Form from "./components/ReactTut/contextAPI/Form/Form";
import FooterState from "./components/ReactTut/contextAPI/Footer-Header/FooterState";
import Navbar from "./components/ReactTut/contextAPI/Footer-Header/Navbar/Navbar";
import Footer from "./components/ReactTut/contextAPI/Footer-Header/Footer/Footer";
import Body from "./components/ReactTut/contextAPI/Footer-Header/Body";

function App() {
  return (
    <div className="App">
      <h1> FrontendFighters ReactApp</h1>
      {/* JS prerequisities starts*/}
      {/* <Spread /> */}
      {/* <Destructuring /> */}
      {/* <FilterAndMap /> */}
      {/* <This /> */}
      {/* JS prerequisities end*/}
      {/* ============================== */}
      {/* Hooks starts */}
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo /> */}
      {/* <HookUseRef /> */}
      {/*Hooks ends */}

      {/* CONTEXT API SMALL PROJECTS */}
      {/*1>  create a form with some fields and on submission show the details on redirected different page
       */}
      {/* <FormState>
        <Router>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </FormState> */}

      {/* 2> Theme Change button is in FOOTER and that will change the theme of navbar; blue to red= red to blue  */}
      <FooterState>
        <Navbar />
        <Body />
        <Footer />
      </FooterState>
    </div>
  );
}

export default App;
