import React, { useState } from "react";
import arrow1 from "../assets/arrow_back_ios-24px 2 1.svg";
import arrow from "../assets/arrow_back_ios-24px 2.svg";

import datas from "../assets/datas/aboutContent";
const DropDown = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const togglerCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      {datas.map((data) => (
        <div key={data.title} className="drop-down">
          <div className="top-bar">
            <h3>{data.title}</h3>
            <img
              src={isCollapsed ? arrow1 : arrow}
              alt="Flèche"
              onClick={togglerCollapse}
            />
          </div>
          {!isCollapsed && (
            <div className="content-container">
              <p>{data.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    // <div>
    //   <div className="drop-down">
    //     <div className="top-bar">
    //       <h3>FIabilité</h3>
    //       <img
    //         src={isCollapsed ? arrow1 : arrow}
    //         alt="Flèche"
    //         onClick={togglerCollapse}
    //       />
    //     </div>
    //     {!isCollapsed && (
    //       <div className="content-container">
    //         <p>
    //           Les annonces postées sur Kasa garantissent une fiabilité totale.
    //           Les photos sont conformes aux logements, et toutes les
    //           informations sont régulièrement vérifiées par nos équipes.
    //         </p>
    //       </div>
    //     )}
    //   </div>
    //   <div className="drop-down">
    //     <div className="top-bar">
    //       <h3>Respect</h3>
    //       <img
    //         src={isCollapsed ? arrow1 : arrow}
    //         alt="Flèche"
    //         onClick={togglerCollapse}
    //       />
    //     </div>
    //     {!isCollapsed && (
    //       <div className="content-container">
    //         <p>
    //           La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
    //           comportement discriminatoire ou de perturbation du voisinage
    //           entraînera une exclusion de notre plateforme.
    //         </p>
    //       </div>
    //     )}
    //   </div>
    //   <div className="drop-down">
    //     <div className="top-bar">
    //       <h3></h3>
    //       <img
    //         src={isCollapsed ? arrow1 : arrow}
    //         alt="Flèche"
    //         onClick={togglerCollapse}
    //       />
    //     </div>
    //     {!isCollapsed && (
    //       <div className="content-container">
    //         <p></p>
    //       </div>
    //     )}
    //   </div>
    //   <div className="drop-down">
    //     <div className="top-bar">
    //       <h3></h3>
    //       <img
    //         src={isCollapsed ? arrow1 : arrow}
    //         alt="Flèche"
    //         onClick={togglerCollapse}
    //       />
    //     </div>
    //     {!isCollapsed && (
    //       <div className="content-container">
    //         <p></p>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};
export default DropDown;
