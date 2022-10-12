import React from "react";
import "./Article.css";
import bgImgWithmedicine from "../../assets/img/card/product/Photo.svg";
import bgImgWithSeptic from "../../assets/img/Photo2.svg";
import bgImgWithBigSeptic from "../../assets/img/Photo.svg";
import MedicalCards from "../medical-cards/MedicalCards";
import Next from "../next-content/Next";

const data = [
  {
    id: 1,
    h1: "Slimming Gel Body",
    title: "Гель для тела для похудения",
    realPrice: "2 480 руб",
    oldPrice: "3579 руб",
    url: bgImgWithmedicine,
    sell: true,
  },
  {
    id: 2,
    h1: "Slimming Gel Body",
    title: "Гель для тела для похудения",
    realPrice: "2 480 руб",
    oldPrice: "3579 руб",
    url: bgImgWithSeptic,
    sell: false,
  },
  {
    id: 3,
    h1: "Slimming Gel Body",
    title: "Гель для тела для похудения",
    realPrice: "2 480 руб",
    oldPrice: "3579 руб",
    url: bgImgWithmedicine,
    sell: true,
  },
  {
    id: 4,
    h1: "Slimming Gel Body",
    title: "Гель для тела для похудения",
    realPrice: "2 480 руб",
    oldPrice: "3579 руб",
    url: `${bgImgWithBigSeptic}`,
    sell: false,
  },
];

function Article(props) {
  return (
    <article>
      <div className="container">
        <Next />
        <div className="cardss">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <MedicalCards
                  h1={item.h1}
                  title={item.title}
                  realPrice={item.realPrice}
                  oldPrice={item.oldPrice}
                  img={item.url}
                  sell={item.sell}
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Article;
