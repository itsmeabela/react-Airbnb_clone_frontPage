import React from "react";

export default function Card(props) {
  console.log(props);
  const {
    cardStatus: {
      coverImg,
      rating,
      reviewCount,
      location,
      title,
      price,
      openSpots,
    },
  } = props;

  let badgeText;

  if (openSpots === 0) {
    badgeText = "SOLD-OUT";
  } else if (location == "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
