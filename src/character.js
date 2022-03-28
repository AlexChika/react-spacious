import React from "react";
import { Row, Col } from "react-bootstrap";
import { people } from "./data";
import { style } from "./planets";
const Character = ({ setDis }) => {
  return (
    <Row className=" my-5 planets g-0">
      {people.map((person) => {
        const { name, Friends, url, id } = person;
        return (
          <Col
            onClick={() => setDis(true)}
            data-id={id}
            className="mb-3 cards"
            key={id}
            sm={6}
            md={4}
          >
            <div style={{ ...style, width: "80%" }} className=" pb-1">
              <div style={{ height: "7em" }}>
                <img src={url} alt={name} />
              </div>
              <p className="m-0 ps-2 title">{name}</p>
              <p className="m-0 ps-2 pop">
                <span>{Friends}</span> Friends
              </p>
            </div>
          </Col>
        );
      })}
      <span className="position-fixed add ">&#43;</span>
    </Row>
  );
};

export default Character;
