import "./App.css";
import Spread from "./components/JSprerequisite/Spread";
import Destructuring from "./components/JSprerequisite/Destructuring";
import FilterAndMap from "./components/JSprerequisite/FilterAndMap";
import This from "./components/JSprerequisite/This";
import HookUseState from "./components/ReactTut/Hooks/HookUseState";
import HookUseEffect from "./components/ReactTut/Hooks/HookUseEffect";
import HookUseMemo from "./components/ReactTut/Hooks/HookUseMemo";

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
      <HookUseMemo />
      {/*Hooks ends */}
    </div>
  );
}

export default App;
