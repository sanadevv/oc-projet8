import React from "react";

import { useParams } from "react-router-dom";
import data from "../assets/datas/housingData";
import DropDown from "../components/DropDown";
import HousingGalerie from "../components/HousingGalerie";
import Rating from "../components/Rating";

const HousingPage = () => {
  const { id } = useParams();

  const housingPage = data.find((housing) => housing.id === id);
  const tags = housingPage.tags;
  if (!housingPage) return <div>Logement non trouvé.</div>;
  // const equipment= {
  //   housingPage.equipments.map((equipment)=>{

  //   })
  // }
  return (
    <div className="housing-page">
      <div className="carrousel">
        <HousingGalerie pictures={housingPage.pictures} />
      </div>
      <div className="housing-info-container">
        <div className="housing-info">
          <h1>{housingPage.title} </h1>
          <p>{housingPage.location} </p>
          <div className="tags">
            {tags.map((tag) => (
              <div key={tag} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <p>{housingPage.host.name} </p>
            <img src={housingPage.host.picture} alt="le propriétaire" />
          </div>
          <div className="rating">
            <Rating rating={housingPage.rating} />
          </div>
        </div>
      </div>
      <div className="description">
        <div className="dropdown-container">
          <DropDown title="Description" content={housingPage.description} />
        </div>
        <div className="dropdown-container">
          <DropDown
            title="Equipements"
            content={housingPage.equipments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default HousingPage;
