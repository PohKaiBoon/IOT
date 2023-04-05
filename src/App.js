import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Map from "./components/Map";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
}; // our location object from earlier

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
