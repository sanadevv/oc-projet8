import React from "react";
import AboutBanner from "../components/AboutBanner";
import DropDown from "../components/DropDown";
import data from "../assets/datas/aboutContent";
const About = () => {
  return (
    <div>
      <AboutBanner />
      <div className="apropos-container">
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
