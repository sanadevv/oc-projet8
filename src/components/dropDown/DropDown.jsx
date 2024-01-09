import React, { useState } from "react";
import arrow1 from "../../assets/arrow_back_ios-24px 2 1.svg";

const DropDown = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const togglerCollapse = () => {
    setIsCollapsed(!isCollapsed);
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

      <div className="content-container">
        <div className="equipment-list">{content}</div>
      </div>
    </div>
  );
};
export default DropDown;
