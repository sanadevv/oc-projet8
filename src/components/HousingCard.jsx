import React from "react";
import data from "../assets/datas/housingData.js";
import { NavLink } from "react-router-dom";
const HousingCard = ({ housing }) => {
  return (
    <div className="cards">
      {data.map((housing) => (
        <NavLink to={`/housing/${housing.id}`}>
          <div key={housing.id} className="housing-card">
            <img src={housing.cover} alt={housing.title} />
            <h3>{housing.title}</h3>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default HousingCard;
