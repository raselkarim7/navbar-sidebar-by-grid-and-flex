import React from "react";
import './ZIndexTest.css'

const ZIndexTest = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <h2>Modal Example</h2>

      <button id="myBtn" onClick={() => setOpen((prev) => !prev)}>
        Open Modal
      </button>

      <div className="square beneath1 "></div>

      <div className=" square beneath2 "></div>

      <div
        id="myModal"
        className="modal"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="modal-content">
          <span className="close" onClick={() => setOpen((prev) => !prev)}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
          <div className="square inside1"></div>
          <div className="square inside2"></div>
        </div>
      </div>
    </>
  );
};

export default ZIndexTest;
