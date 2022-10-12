import React from "react";
import "./HeaderImage.css";

function HeaderImage({ bgimg }) {
  const bgStyle = {
    background: `url(${bgimg})`,
  };
  return (
    <div className="HeaderImage" style={bgStyle}>
      <div className="container">
        <div className="header__view">
          <div className="header_image_title">SKINDOM</div>
          <div>Специальные цены только до 30 апреля</div>
          <div className="btn">
            <button className="header__btn">Перейти в каталог</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
