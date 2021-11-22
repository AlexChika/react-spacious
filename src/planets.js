import React from "react";
import { Row, Col } from "react-bootstrap";
import { color, planets } from "./data";
function x() {
  let index = Math.floor(Math.random() * color.length);
  return index;
}
x();
export const style = {
  width: "95%",
  backgroundColor: "white",
  margin: "0 auto",
  marginBottom: "5px",
  borderRadius: "15px",
};
function ball(x) {
  return {
    background: ` radial-gradient(
    circle,
    ${color[x]} 5%,
    rgba(255, 255, 255, 0.3) 99%
  )`,
  };
}
const Planets = () => {
  return (
    <Row className=" my-5 planets g-0">
      {planets.map((planet) => {
        const { name, pop, id } = planet;
        return (
          <Col data-id={id} className="mb-3 cards" key={id} sm={6} md={4}>
            <div style={style} className="pt-3 pb-1 ps-2">
              <div className="circ " style={ball(x())}></div>
              <p className="m-0 title">
                Planet <span>{name}</span>
              </p>
              <p className="m-0 pop">
                Pop: <span>{pop}</span>
              </p>
            </div>
          </Col>
        );
      })}
      <span className="position-fixed add ">&#43;</span>
    </Row>
  );
};

export default Planets;
