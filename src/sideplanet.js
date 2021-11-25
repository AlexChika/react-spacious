import React, { useState, useEffect } from "react";
import { plandesc, people } from "./data";
const index = () => {
  let index = Math.floor(Math.random() * people.length);
  return index;
};
const Sidepla = () => {
  const [title, setT] = useState("");
  const [pop, setP] = useState("");
  const [id, setI] = useState("");
  useEffect(() => {
    const cards = document.querySelectorAll(".cards");
    if (cards) {
      cards.forEach((card) => {
        card.addEventListener("click", (e) => {
          const id = card.dataset.id;
          const title = card.querySelector(".title").textContent;
          const pop = card.querySelector(".pop").textContent;
          const side = document.querySelector(".side");
          side.style.display = "block";
          setT(title);
          setP(pop);
          setI(id);
        });
      });
    }
  }, []);
  return (
    <>
      <div>
        <h4 className="text-center fw-bolder">{title}</h4>
        <p className="cr text-justify">{plandesc[id]}</p>
        <div>
          <p className="mb-0">population</p>
          <p className="fw-bold mb-0">{pop.slice(4, pop.length)}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Characters</p>
          <button className="bg-light btn">+</button>
        </div>
        <div className="d-flex align-items-center mb-3">
          <img
            style={{ height: "4em", width: "4em" }}
            src={people[index()].url}
            alt=""
          />
          <div className="px-2">
            <p className="mb-0 fw-bold">{people[index()].name}</p>
            <p className="mb-0 cr">{people[index()].Friends} friends</p>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <img
            style={{ height: "4em", width: "4em" }}
            src={people[index()].url}
            alt=""
          />
          <div className="px-2">
            <p className="mb-0 fw-bold">{people[index()].name}</p>
            <p className="mb-0 cr">{people[index()].Friends} friends</p>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <img
            style={{ height: "4em", width: "4em" }}
            src={people[index()].url}
            alt=""
          />
          <div className="px-2">
            <p className="mb-0 fw-bold">{people[index()].name}</p>
            <p className="mb-0 cr">{people[index()].Friends} friends</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img
            style={{ height: "4em", width: "4em" }}
            src={people[index()].url}
            alt=""
          />
          <div className="px-2">
            <p className="mb-0 fw-bold">{people[index()].name}</p>
            <p className="mb-0 cr">{people[index()].Friends} friends</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidepla;
