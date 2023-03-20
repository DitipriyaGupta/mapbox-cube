
import { useMap } from "../../useMap";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Button from "../Button";

const MapContainer = () => {
  const { mapContainer, lng, lat, zoom } = useMap();
  return (
    <div className="container">
      <div className="container2"> <div ref={mapContainer} className="map-container" />
         <div className="sidebar">
        <p>Longitude: {lng}</p>
        <p>Latitude: {lat}</p>
        <p>Zoom: {zoom}</p>
      </div></div>
   
     
      <Button
        linkto={`3dContainer/${lat}/${lng}/${zoom}`}
        text="Go to 3D Model"
      />
    </div>
  );
};

export default MapContainer;
