import React from "react";
import HousingCard from "../components/HousingCard";
import Banner from "../components/Banner";
import image from "../assets/IMG.png";
// import data from "../assets/datas/housingData";

const Home = () => {
  return (
    <div>
      <Banner image={image} text={"Chez vous, partout et ailleurs"} />

      <HousingCard />
    </div>
  );
};

export default Home;
