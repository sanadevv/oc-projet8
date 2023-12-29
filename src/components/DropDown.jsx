import React, { useState } from "react";
import arrow1 from "../assets/arrow_back_ios-24px 2 1.svg";
import arrow from "../assets/arrow_back_ios-24px 2.svg";

// import data from "../assets/datas/aboutContent";
const DropDown = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const togglerCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div key={title} className="drop-down">
      <div className="top-bar">
        <h3>{title}</h3>
        <img
          src={isCollapsed ? arrow1 : arrow}
          alt="Flèche"
          onClick={togglerCollapse}
        />
      </div>
      {!isCollapsed && (
        <div className="content-container">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
export default DropDown;
