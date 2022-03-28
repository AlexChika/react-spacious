import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Planets from "./planets";
import Characters from "./character";
import Sidepla from "./sideplanet";
import Sidecha from "./sidecharacter";

const App = () => {
  const [select, selectX] = useState(true);
  const [display, setDis] = useState(false);
  const showP = () => {
    selectX(true);
    setDis(false);
  };
  const showC = () => {
    selectX(false);
    setDis(false);
  };
  const close = () => {
    setDis(false);
  };
  return (
    <Container className=" g-0">
      <h1 className="color">Spacious</h1>
      <div>
        <button onClick={showP} className={`switchs ${select ? "active" : ""}`}>
          PLANETS
        </button>
        <button onClick={showC} className={`switchs ${select ? "" : "active"}`}>
          CHARACTERS
        </button>
      </div>
      <Container className="d-flex g-0">
        <div className={`${display ? "col-7 col-md-8" : "width"} `}>
          {select ? <Planets setDis={setDis} /> : ""}
          {select ? "" : <Characters setDis={setDis} />}
        </div>
        <div
          className={`side ${display ? "" : "hide"} col-5 col-md-4 bg-white`}
        >
          <button
            onClick={close}
            className=" d-block ms-auto fs-3 btn px-2 py-0 mb-0 bg-light"
          >
            x
          </button>
          {select ? <Sidepla /> : ""}
          {select ? "" : <Sidecha />}
        </div>
      </Container>
    </Container>
  );
};

export default App;
