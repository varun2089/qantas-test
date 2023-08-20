import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders App component without crashing", () => {
    render(<App />);
  });

  test("renders Qantas logo", () => {
    render(<App />);
    const logo = screen.getByAltText("Qantas Logo");
    expect(logo).toBeInTheDocument();
  });
});
