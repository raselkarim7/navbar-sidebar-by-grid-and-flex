import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function App() {
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {}, []);
  const menuArray = Array(5).fill(0);

  return (
    <div className="App">
      <div className="header">
        <div className="part1">
          <div className="appTitle">NAGANO NABCO</div>
          <div className="menuOpenIconContainer">
            <MenuOpenIcon />
          </div>
        </div>
        <div></div>
      </div>
      <div className="sidebar">
        {menuArray.map((item, index) => (
          <div className="menuItem" key={index}>Menu {index + 1} </div>
        ))}
      </div>
      <div className="main">Main</div>
    </div>
  );
}

export default App;
