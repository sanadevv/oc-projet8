import React, { useState } from "react";
import arrowR from "../assets/Vector right.svg";
import arrowL from "../assets/Vector left.svg";
const HousingGalerie = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
    );
  };
  if (pictures.length <= 1) {
    return (
      <div className="image-gallery">
        <img
          src={pictures[currentImageIndex]}
          alt={`${currentImageIndex}`}
          className="housing-image"
        />
      </div>
    );
  }
  return (
    <div className="image-gallery">
      <img
        src={pictures[currentImageIndex]}
        alt={`${currentImageIndex}`}
        className="housing-image"
      />
      <img
        src={arrowL}
        alt="flèche gauche"
        onClick={handlePrevClick}
        className="left-arrow"
      />
      <img
        src={arrowR}
        alt="flèche droite"
        onClick={handleNextClick}
        className="right-arrow"
      />
      <div className="image-count">
        {currentImageIndex + 1} / {pictures.length}
      </div>
    </div>
  );
};

export default HousingGalerie;
