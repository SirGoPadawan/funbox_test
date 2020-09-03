import React, { useState } from "react";
import CardItem from "./CardItem.jsx";
import CardSvgDisabled from "./CardSvgDisabled.jsx";

export default function Card({ cardData }) {
  const [active, setActive] = useState(false);
  return (
    <section className={`card-items ${!cardData.inStock ? "disabled" : ""}`}>
      <section
        className="card"
        onClick={() => cardData.inStock && setActive(!active)}
      >
        <CardSvgDisabled />
        <CardItem active={active} />
        <span className="card-span">{cardData.cardSpan}</span>
        <h2 className="card-title">{cardData.title}</h2>
        <span className="card-subtitle">{cardData.subTitle}</span>
        <span className="card-count">{cardData.count}</span>
        <span className="card-present">{cardData.present}</span>
        <span className="card-present">{cardData.subPresent}</span>
        <div className="card-cat"></div>
        <span className={active ? "card-circle_active" : "card-circle"}>
          {cardData.weight}
          <span>кг</span>
        </span>
      </section>
      <div className="card-subitem">
        {cardData.subItem}
        <button
          className="card-buy btn"
          onClick={() => cardData.inStock && setActive(!active)}
        >
          {cardData.textButton}
        </button>
      </div>
    </section>
  );
}
