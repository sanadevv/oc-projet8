import React from "react";
import HousingCard from "../components/housingCard/HousingCard";
import Banner from "../components/banner/Banner";
import image from "../assets/IMG.png";
import data from "../assets/datas/housingData";

const Home = () => {
  return (
    <div>
      <Banner image={image} text={"Chez vous, partout et ailleurs"} />
      <div className="cards">
        {data.map((housing) => (
          <HousingCard key={housing.id} housing={housing} />
        ))}
      </div>
    </div>
  );
};

export default Home;
