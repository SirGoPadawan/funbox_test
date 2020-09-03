import React from "react";
import "./styles/App.scss";

import Card from "./components/Card.jsx";
const cardData = [
  {
    inStock: true,
    cardSpan: "Сказочное заморское яство",
    title: "Нямушка",
    subTitle: "с фуа гра",
    count: "10 порций",
    present: "мышь в подарок",
    subPresent: "",
    weight: "0,5",
    subItem: "Чего сидишь? Порадуй котэ ",
    textButton: "купи.",
  },
  {
    inStock: true,
    cardSpan: "Сказочное заморское яство",
    title: "Нямушка",
    subTitle: "с рыбой",
    count: "40 порций",
    present: "2 мыши в подарок",
    subPresent: "",
    weight: "2",
    subItem: " Головы щучьи с чесноком да свежайшая сёмгушка. ",
    textButton: "",
  },
  {
    inStock: false,
    cardSpan: "Сказочное заморское яство",
    title: "Нямушка",
    subTitle: "с курой",
    count: "100 порций",
    present: "5 иышей в подарок",
    subPresent: "заказчик доволен",
    weight: "5",
    subItem: "Печалька, с курой закончился",
    textButton: "",
  },
];

export default function App() {
  console.log("app");
  return (
    <section className="wrapper">
      <h1 className="wrapper__title">Ты сегодня покормил кота?</h1>
      <section className="card-list">
        {cardData.map((props, index) => (
          <div key={index}>
            <Card cardData={props} />
          </div>
        ))}
      </section>
    </section>
  );
}
