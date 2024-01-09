import React from "react";
import Groupe from "../../assets/Group.svg";
import vectork from "../../assets/Vectork.svg";
import vectora from "../../assets/Vectora.svg";
import vectors from "../../assets/Vectors.svg";
const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={vectork} className="" alt="logo" />
        <img src={Groupe} className="" alt="logo" />
        <img src={vectora} className="" alt="logo" />
        <img src={vectors} className="" alt="logo" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
