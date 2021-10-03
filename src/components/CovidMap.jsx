import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { geolocated } from "react-geolocated";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
const DEFAULT_LATITUDE = 105.79;
const DEFUALT_LANGITUDE = 20.97;
const CovidMap = ({ coords }) => {
  console.log(coords);
  const latitude = coords ? coords?.latitude : DEFAULT_LATITUDE;
  const langtitude = coords ? coords?.longitude : DEFUALT_LANGITUDE;
  console.log(latitude, langtitude);

  return (
    <div>
      <MapContainer
        center={[langtitude, latitude]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coords ? (
          <Marker position={[langtitude, latitude]}>
            <Popup>You are here~</Popup>
          </Marker>
        ) : (
          <div>loading</div>
        )}
      </MapContainer>
    </div>
  );
};

//export default CovidMap;
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(CovidMap);
