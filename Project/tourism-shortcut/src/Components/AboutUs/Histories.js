import React from "react";
import "../AboutUs/Histories.css";
import Travelling from "../img/Travelling.jpg";
import Plane from "../img/Plane.jpg";
import Goa from "../img/Goa.jpg";

export const Histories = () => {
  return (
    <div className="Hit-page">
      <h2 className="Hit-national">National histories</h2>
      <p className="hit-PTag">
        The most significant event between the 7th and 11th century was the
        Tripartite struggle centred on Kannauj that lasted for more than two
        centuries between the Pala Empire, Rashtrakuta Empire, and
        Gurjara-Pratihara Empire. Southern India saw the rise of multiple
        imperial powers from the middle of the fifth century, most notably the
        Chalukya, Chola, Pallava, Chera, Pandyan, and Western Chalukya Empires.
        The Chola dynasty conquered southern India and successfully invaded
        parts of Southeast Asia, Sri Lanka, the Maldives, and Bengal[13] in the
        11th century.[14][15] In the early medieval period Indian mathematics,
        including Hindu numerals, influenced the development of mathematics and
        astronomy in the Arab world.[16]
      </p>
      <div className="p-2 bg-light border mx-auto">
        <img src={Travelling} alt="" width={200} height={200} />
        <img src={Goa} alt="" width={200} height={200} />
        <img src={Plane} alt="" width={200} height={200} />
      </div>
    </div>
  );
};
