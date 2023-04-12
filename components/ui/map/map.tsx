import { useState, useRef, MutableRefObject, useEffect } from "react";
import classes from "./map.module.scss";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "react-loading-skeleton/dist/skeleton.css";

function ChangeView({ coords }: { coords: LatLngExpression }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

const Map = () => {
  const [lngLat, setLatLng] = useState({
    lng: -74.006,
    lat: 40.7128,
  });

  const defaultIcon = new Icon({
    iconUrl: "/marker-icon.png",
    iconSize: [24, 36],
    iconAnchor: [12, 36],
  });

  const center: LatLngExpression = [lngLat.lat, lngLat.lng];

  return (
    <MapContainer center={center} zoom={14} className={classes.map}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lngLat.lat && lngLat.lng && (
        <Marker position={[lngLat.lat, lngLat.lng]} icon={defaultIcon} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
};

export default Map;
