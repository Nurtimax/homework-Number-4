import React from "react";
import "./Section.css";
import sectionImg from "../../assets/img/section-img.svg";
import arrow from "../../assets/icons/Icons/24/Arrow/thin_long_02_right.svg";

const titleData = [
  { title: `Безупречный состав и эффективность`, id: 1 },
  { title: `Натуральность и экологичность`, id: 2 },
  { title: `Наличный  и безналичный расчет`, id: 3 },
  { title: `Доставка  по всей России`, id: 4 },
];
console.log((<br />).type);
function Section() {
  return (
    <section>
      <div className="container">
        <div className="wrapper__section">
          <figure>
            <img className="section__img" src={sectionImg} alt="" />
          </figure>
          <div className="wrapper__in__section">
            <div className="titles">
              <div className="h3__title">
                Ведущий эксперт на российском рынке профессиональной косметики
                из Кореи—ККshop™
              </div>
              <div className="title">
                Мы делаем мир профессиональной корейской косметики доступным
                для каждого косметолога в России, предоставляя возможность
                работать с лучшими достижениями корейских учёных и специалистов
                в области сохранения здоровья и ухода за кожей
              </div>
            </div>
            <div className="more">
              Подробнее <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="cards">
          {titleData.map((item) => {
            return (
              <div className="card">
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Section;
