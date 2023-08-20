import React from "react";
import "./HotelCard.css";
import { Hotel } from "./types";

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  const renderRating = (
    ratingValue: number,
    ratingType: "star" | "self" | string,
  ) => {
    const ratings = [];
    for (let i = 0; i < ratingValue; i++) {
      ratings.push(
        <span key={i} className={ratingType === "star" ? "star" : "circle"}>
          {ratingType === "star" ? (
            <div className="star-image" data-testid="star"></div>
          ) : (
            <div className="circle-image" data-testid="circle"></div>
          )}
        </span>,
      );
    }
    return ratings;
  };

  return (
    <div className="hotel-card" data-testid="hotel-card">
      <img
        src={hotel.property.previewImage.url}
        alt={hotel.property.previewImage.caption}
      />
      <div className="hotel-details">
        <h3>
          {hotel.property.title}{" "}
          <span className="rating-container">
            {renderRating(
              hotel.property.rating.ratingValue,
              hotel.property.rating.ratingType,
            )}
          </span>
        </h3>
        <p>{hotel.property.address.join(", ")}</p>
      </div>
      <div className="hotel-price">
        ${hotel.offer.displayPrice.amount.toFixed(2)}{" "}
        {hotel.offer.displayPrice.currency}
      </div>
    </div>
  );
};

export default HotelCard;
