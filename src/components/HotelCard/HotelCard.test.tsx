import React from "react";
import { render, screen } from "@testing-library/react";
import HotelCard from "./HotelCard";

const mockHotel = {
  property: {
    previewImage: {
      url: "test_image.jpg",
      caption: "Test Image",
    },
    title: "Test Hotel",
    address: ["123 Street", "City", "Country"],
    rating: {
      ratingValue: 3,
      ratingType: "star",
    },
  },
  offer: {
    displayPrice: {
      amount: 123.45,
      currency: "USD",
    },
  },
};

describe("HotelCard Component", () => {
  test("renders HotelCard without crashing", () => {
    render(<HotelCard hotel={mockHotel} />);
  });

  test("displays correct hotel details", () => {
    render(<HotelCard hotel={mockHotel} />);

    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
    expect(screen.getByAltText("Test Image")).toBeInTheDocument();
    expect(screen.getByText("123 Street, City, Country")).toBeInTheDocument();
    expect(screen.getByText("$123.45 USD")).toBeInTheDocument();
  });

  describe("Rating Rendering", () => {
    test("renders correct number of stars", () => {
      render(<HotelCard hotel={mockHotel} />);

      const stars = screen.getAllByTestId('star');
      expect(stars.length).toBe(3);
    });

    test("renders correct number of circles when rating type is circle", () => {
      const circleMockHotel = { ...mockHotel };
      circleMockHotel.property.rating.ratingType = "self";
      circleMockHotel.property.rating.ratingValue = 4;

      render(<HotelCard hotel={circleMockHotel} />);

      const circles = screen.getAllByTestId('circle');
      expect(circles.length).toBe(4);
    });
  });
});
