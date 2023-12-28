import React from "react";

import { useParams } from "react-router-dom";
import housingData from "../assets/datas/housingData";

const HousingPage = () => {
  const { id } = useParams();

  const housingPage = housingData.find((housing) => housing.id === id);
  const tags = housingPage.tags;
  if (!housingPage) return <div>Logement non trouvé.</div>;
  return (
    <div className="housing-page">
      <div className="carrousel"></div>
      <div className="housing-info-container">
        <div className="housing-info">
          <h1>{housingPage.title} </h1>
          <p>{housingPage.location} </p>
          <div className="tags">
            {tags.map((tag) => (
              <div className="tag">{tag}</div>
            ))}
          </div>
        </div>
        <div className="host_rating">
          <div className="host">
            <p>{housingPage.host.name} </p>
            <img src={housingPage.host.picture} alt="le propriétaire" />
          </div>
          <div className="rating"></div>
        </div>
      </div>
    </div>
  );
};

export default HousingPage;
