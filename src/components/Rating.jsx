import React from "react";

const Rating = ({ rating }) => {
  const fullStars = rating;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i className="fa-solid fa-star"></i>);
  }
  const emptyStars = 5 - fullStars;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i className="fa-solid fa-star empty-star"></i>);
  }

  return stars;
};

export default Rating;
