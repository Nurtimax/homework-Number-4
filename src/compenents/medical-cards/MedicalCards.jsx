import React from "react";

function MedicalCards({ h1, title, realPrice, oldPrice, img, sell }) {
  return (
    <div>
      <div className="article__card">
        <div className="seel__and__medicine">
          {sell ? (
            <div className="for__sell">sell</div>
          ) : (
            <div className="for__sell__false"></div>
          )}
          <figure>
            <img src={img} alt="medical" />
          </figure>
        </div>
        <div className="article__card__titles">
          <div>
            <div className="slimming__gel">{h1}</div>
            <div className="gel__for__body">{title}</div>
          </div>
          <div className="price">
            <span className="first__price">{realPrice}</span>
            <span className="second__price">{oldPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalCards;
