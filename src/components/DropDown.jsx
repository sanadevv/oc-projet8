import React, { useState } from "react";
import arrow1 from "../assets/arrow_back_ios-24px 2 1.svg";
import arrow from "../assets/arrow_back_ios-24px 2.svg";

// import data from "../assets/datas/aboutContent";
const DropDown = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const togglerCollapse = () => {
    // setTimeout(() => {
    setIsCollapsed(!isCollapsed);
    // }, 300);
  };
  return (
    <div className={isCollapsed ? "drop-down" : "drop-down not-collapsed"}>
      <div className="top-bar">
        <h3>{title}</h3>
        <img
          src={arrow1}
          className={isCollapsed ? "arrow" : "arrow-rotated"}
          alt="Chevron"
          onClick={togglerCollapse}
        />
      </div>

      {/* {!isCollapsed && ( */}
      <div className="content-container">
        <div className="equipment-list">{content}</div>
      </div>
      {/* )} */}
    </div>
  );
};
export default DropDown;
