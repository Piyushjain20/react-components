import { useState } from "react";
import "./App.css";
import Card from "./components/card component/js/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
