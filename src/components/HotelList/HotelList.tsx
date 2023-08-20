import React, { useState } from "react";
import hotels from "../../data/data.json";
import HotelCard from "../HotelCard/HotelCard";
import "./HotelList.css";

const HotelList = () => {
  const [sortMethod, setSortMethod] = useState("default");

  const sortedHotels = [...hotels.results].sort((a, b) => {
    switch (sortMethod) {
      case "high-low":
        return b.offer.displayPrice.amount - a.offer.displayPrice.amount;
      case "low-high":
        return a.offer.displayPrice.amount - b.offer.displayPrice.amount;
      default:
        return 0;
    }
  });

  return (
    <div className="hotel-list">
      <div className="sorting-container">
        <select
          onChange={(e) => setSortMethod(e.target.value)}
          value={sortMethod}
        >
          <option value="default">Default</option>
          <option value="high-low">Price (high-low)</option>
          <option value="low-high">Price (low-high)</option>
        </select>
      </div>

      {sortedHotels.map((hotel, index) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
