import React, { useState, useEffect } from "react";
import { chadesc, planets, people } from "./data";
const index = () => {
  let index = Math.floor(Math.random() * planets.length);
  return index;
};
const Sidecha = () => {
  const [title, setT] = useState("");
  const [pop, setP] = useState("");
  const [url, setU] = useState("");
  const [id, setI] = useState("");
  useEffect(() => {
    const cards = document.querySelectorAll(".cards");
    if (cards) {
      cards.forEach((card) => {
        card.addEventListener("click", (e) => {
          let id = card.dataset.id;
          const title = card.querySelector(".title").textContent;
          const pop = card.querySelector(".pop").textContent;
          const url = card.querySelector("img").getAttribute("src");
          const side = document.querySelector(".side");
          side.style.display = "block";
          setT(title);
          setP(pop);
          setU(url);
          setI(id);
        });
      });
    }
  }, []);
  return (
    <>
      <div>
        <h4 className="text-center fw-bolder">{title}</h4>
        <img style={{ height: "6em" }} src={url} alt={title} />
        <p className="cr text-justify">{chadesc[id]}</p>
        <article className="d-flex justify-content-around">
          <div>
            <p className="mb-0">Planet</p>
            <p className="fw-bold mb-0">{planets[index()].name}</p>
          </div>
          <div>
            <p className="mb-0">Friends</p>
            <p className="fw-bold mb-0">{pop.slice(0, 3)}</p>
          </div>
        </article>

        <p className="mb-0 text-secondary">Friends</p>
        <div className="d-flex align-items-center mb-3">
          <img
            style={{ height: "4em", width: "4em" }}
            src={people[index()].url}
            alt=""
          />
          <div className="px-2">
            <p className="mb-0 fw-bold">{people[index()].name}</p>
            <p className="mb-0 cr">{chadesc[index()]}</p>
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
            <p className="mb-0 cr">{chadesc[index()]}</p>
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
            <p className="mb-0 cr">{chadesc[index()]}</p>
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
            <p className="mb-0 cr">{chadesc[index()]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidecha;
