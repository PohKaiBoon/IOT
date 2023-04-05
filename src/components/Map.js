import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import pets from "../img/pets.png";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 37.419549843388815,
  lng: -121.96070282562731,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

const currentLocation = {
  lat: 37.419630733117536,
  lng: -121.96162239138657,
};

const beacons = [
  // {
  //   lat: 1.383648,
  //   lng: 103.850086,
  // },
  // {
  //   lat: 1.383626,
  //   lng: 103.850729,
  // },
  // {
  //   lat: 1.38229,
  //   lng: 103.850548,
  // },
  // {
  //   lat: 1.382436,
  //   lng: 103.849923,
  // },
  { lat: 37.418436, lng: -121.963477 },
  { lat: 37.417243, lng: -121.961889 },
  { lat: 37.418692, lng: -121.960194 },
];

class Map extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyDiPNxXhp8Sz_uqyoOlIA_wqkOY0EhkLIo">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
          {beacons.map((position) => (
            <MarkerF
              onLoad={onLoad}
              position={position}
              title={position.lat.toString() + " " + position.lng.toString()}
            />
          ))}
          <MarkerF position={currentLocation} icon={pets}></MarkerF>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default Map;
