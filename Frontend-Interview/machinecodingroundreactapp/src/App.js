import logo from "./logo.svg";
import "./App.css";
import Counter from "./questions/counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter maxValue={100} />
    </div>
  );
}

export default App;
