import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HotelList from "./HotelList";
import hotels from "../../data/data.json";

describe("HotelList", () => {
  beforeEach(() => {
    render(<HotelList />);
  });

  it("renders the sorting dropdown with default options", () => {
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("default");
  });

  it("sorts hotels by price (high-low) when selected", () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "high-low" },
    });

    const sortedByHighLow = [...hotels.results].sort(
      (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount,
    );
    const firstHotelTitleOnScreen = screen.getAllByText(
      new RegExp(sortedByHighLow[0].property.title, "i"),
    )[0];

    expect(firstHotelTitleOnScreen).toBeInTheDocument();
  });

  it("sorts hotels by price (low-high) when selected", () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "low-high" },
    });

    const sortedByLowHigh = [...hotels.results].sort(
      (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount,
    );
    const firstHotelTitleOnScreen = screen.getAllByText(
      new RegExp(sortedByLowHigh[0].property.title, "i"),
    )[0];

    expect(firstHotelTitleOnScreen).toBeInTheDocument();
  });

  it("renders a HotelCard for each hotel", () => {
    const hotelCards = screen.getAllByTestId("hotel-card");
    expect(hotelCards).toHaveLength(hotels.results.length);
  });
});
