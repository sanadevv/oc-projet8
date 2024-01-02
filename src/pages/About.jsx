import React from "react";
import Banner from "../components/Banner";
import DropDown from "../components/DropDown";
import data from "../assets/datas/aboutContent";
import image from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

const About = () => {
  return (
    <div>
      <Banner image={image} text={""} />
      <div className="about-container">
        {data.map((item) => (
          <DropDown
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
