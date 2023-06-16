import logo from "./logo.svg";
import "./App.css";
import Counter from "./questions/counter/Counter";
import DarkLight from "./questions/dark/lightmode/DarkLight";
import Carousel from "./questions/carousel/Carousel";

function App() {
  const api = "https://cataas.com/api/cats	";
  const slideInterval = 2000;
  return (
    <div className="App">
      {/* <Counter maxValue={100} /> */}
      {/* <DarkLight /> */}
      <Carousel apiUrl={api} slideInterval={slideInterval} />
    </div>
  );
}

export default App;
