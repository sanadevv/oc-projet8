import React from "react";

function Banner({ image, text }) {
  return (
    <div className="kasa-banner">
      <img src={image} alt="montagne" />
      <div className="banner-div"></div>
      <p>{text}</p>
    </div>
  );
}
export default Banner;
