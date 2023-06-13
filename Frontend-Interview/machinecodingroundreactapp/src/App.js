import logo from "./logo.svg";
import "./App.css";
import Counter from "./questions/counter/Counter";
import DarkLight from "./questions/dark/lightmode/DarkLight";

function App() {
  return (
    <div className="App">
      {/* <Counter maxValue={100} /> */}
      <DarkLight />
    </div>
  );
}

export default App;
