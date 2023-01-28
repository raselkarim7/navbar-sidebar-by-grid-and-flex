import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="header">
        <div className="part1">
          Part 1
          
        </div>
        <div>
          Part 2
        </div>
      </div>
      <div className="sidebar">Sidebar</div>
      <div className="main">Main</div>
    </div>
  );
}

export default App;
