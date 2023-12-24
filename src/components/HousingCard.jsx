import React from "react";
import data from "../assets/datas/housingData.js";
const HousingCard = ({ housing }) => {
  return (
    <div className="cards">
      {data.map((housing) => (
        <div key={housing.id} className="housing-card">
          <img src={housing.cover} alt={housing.title} />
          <h3>{housing.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default HousingCard;
