import React from "react";
import "./App.css";
import HotelList from "./components/HotelList/HotelList";

function App() {
  return (
    <div className="App">
      <img src="qantas-logo.png" alt="Qantas Logo" className="qantas-logo" />
      <HotelList />
    </div>
  );
}

export default App;
