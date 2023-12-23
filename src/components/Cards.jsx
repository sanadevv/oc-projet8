import React from "react";
import data from "../assets/datas/housingData.js";
import HousingCard from "./HousingCard.jsx";

const Cards = () => {
  return (
    <div className="cards">
      {data.map((housing) => (
        <HousingCard key={housing.id} />
      ))}
    </div>
  );
};

export default Cards;
