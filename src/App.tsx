import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function App() {
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {}, []);
  const menuArray = Array(5).fill(0);

  return (
    <div className={sidebar ? "appSidebar" : "appNoSidebar"}>
      <div className="header">
        <div className="part1">
          {sidebar ? <div className="appTitle">Pink Floyd - GRID</div> : ""}
          <div
            className={`menuOpenIconContainer ${sidebar ? '' : 'logoAnim'}`}
            onClick={() => {
              setSidebar((prev) => !prev);
            }}
          >
            <MenuOpenIcon />
          </div>
        </div>
        <div></div>
      </div>

      {sidebar ? (
        <div className="sidebar">
          {menuArray.map((item, index) => (
            <div className="menuItem" key={index}>
              Menu {index + 1}{" "}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      <div className="main">Main</div>
    </div>
  );
}

export default App;
