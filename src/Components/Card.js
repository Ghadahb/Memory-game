import React from "react";
import "../card.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  console.log(isFlipped);
  console.log(isInactive);

  return (
    <div
      className={
        isFlipped ? "is-flipped card" : isInactive ? "is-inactive card" : "card"
      }
      onClick={handleClick}
    >
      <div className="card-face card-font-face"></div>
      <div className="card-face card-back-face">
        <img src={card.image} alt={card.name} />
        <p className="card-name">{card.name}</p>
      </div>
    </div>
  );
};

export default Card;
