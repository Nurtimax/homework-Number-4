import React from "react";
import "./Aside.css";
import Next from "../next-content/Next";
import image from "../../assets/img/image 12.svg";

const data = [
  {
    id: 1,
    name: "R&B Black Food 3.7",
    title:
      "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    url: image,
  },
  {
    id: 2,
    name: "R&B Black Food 3.7",
    title:
      "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    url: image,
  },
  {
    id: 3,
    name: "R&B Black Food 3.7",
    title:
      "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    url: image,
  },
];

function Aside() {
  return (
    <aside>
      <div className="container">
        <Next />
      </div>
      <div className="bigest__card">
        {data.map((item) => {
          return (
            <div className="big__card" key={item.id}>
              <figure>
                <img src={item.url} alt={item.title} />
              </figure>
              <div className="balzam__black">
                <div className="black__foog">{item.name}</div>
                <div className="balzam">{item.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default Aside;
