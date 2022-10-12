import React from "react";
import "./Content.css";
import logo from "../../assets/icons/image 1.svg";
import searchIcon from "../../assets/icons/Union.svg";
import personIcon from "../../assets/icons/person.svg";
import heartIcon from "../../assets/icons/heart.svg";
import basketIcon from "../../assets/icons/shape.svg";
import HeaderImage from "../header-bg-img/HeaderImage";
import bgImage from "../../assets/img/header__img.svg";
import Section from "../section/Section";
import Article from "../article/Article";
import Aside from "../aside/Aside";

const headerData = [
  { id: 1, lists: "Каталог" },
  { id: 2, lists: "Клуб косметологов" },
  { id: 3, lists: "Сертификаты" },
  { id: 4, lists: "Доставка и оплата" },
  { id: 5, lists: "Контакты" },
  { id: 6, lists: "Блог" },
];

const headerUrl = [
  { id: 1, url: searchIcon },
  { id: 2, url: heartIcon },
  { id: 3, url: basketIcon },
  { id: 4, url: personIcon },
];

function Content() {
  return (
    <header
      className="header"
      key={headerData.forEach((item) => {
        return item.id;
      })}
    >
      <div className="container">
        <div className="header__location">
          <div className="location">
            <select name="" id="select">
              <option value="Bishkek">Bishkek</option>
              <option value="Chui">Chui</option>
              <option value="Naryn">Naryn</option>
              <option value="Talas">Talas</option>
              <option value="Batken">Batken</option>
              <option value="Issyk-kol">Issyk-kol</option>
              <option value="Osh">Osh</option>
              <option value="Jalal-abad">Jalal-abad</option>
            </select>
          </div>
          <div className="phone__number">8 495 259 25 00</div>
        </div>
        <div className="wrapper">
          <div className="wrapper__list">
            <figure className="logo">
              <img src={logo} alt="logo" />
            </figure>
            <ul className="header__lists">
              {headerData.map((item) => {
                return <li key={item.id}>{item.lists}</li>;
              })}
            </ul>
          </div>
          <div className="icons">
            {headerUrl.map((item) => {
              return (
                <figure key={item.id}>
                  <img src={item.url} alt="search" />
                </figure>
              );
            })}
          </div>
        </div>
      </div>
      <HeaderImage bgimg={bgImage} />
      <Section />
      <Article />
      <Aside />
      <Article />
    </header>
  );
}

export default Content;
