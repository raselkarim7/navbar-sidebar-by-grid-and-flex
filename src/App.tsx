import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const LoremText = () => (
  <p style={{ margin: "10px 0px", padding: "10px" }}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quis
    voluptatem cumque repellat enim, neque, quibusdam libero itaque obcaecati
    debitis voluptate, dolorum accusantium laboriosam voluptatum voluptas rem ab
    vero minus beatae non voluptatibus distinctio sit ullam. Rerum eius
    perspiciatis magni architecto? Culpa fugiat dolorem ab distinctio odit iste
    temporibus possimus?
  </p>
);

function App() {
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {}, []);
  const menuArray = Array(5).fill(0);

  return (
    <div>
      <div className={`sidebar ${sidebar ? "visible" : "invisible" }`}>
        {sidebar
          ? menuArray.map((item, index) => (
              <div className="menuItem" key={index}>
                Album {index + 1}{" "}
              </div>
            ))
          : ""}
      </div>

      <div className={`hm-wrapper ${sidebar ? "withSidebar" : "fullWidth"}`}>
        <div className={`header`}>
          <div className="part1">
            <div
              className={`menuOpenIconContainer ${sidebar ? "" : "logoAnim"}`}
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
            >
              <MenuOpenIcon />
            </div>
          </div>
          <div>Profile Logo</div>
        </div>

        <div className={`main`}>
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
        </div>
      </div>
    </div>
  );
}

export default App;
