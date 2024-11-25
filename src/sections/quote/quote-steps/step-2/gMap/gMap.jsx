import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import "./gMap.css";

import Input from "../../../../../components/input/input.jsx";

const libraries = ["places"];

export const GMap = ({ handleInputChange }) => {
  const [mapCenter, setMapCenter] = useState({
    lat: 20.659698,
    lng: -103.349609,
  });
  const [markerPosition, setMarkerPosition] = useState(null);
  const [locationText, setLocationText] = useState("");
  const [locationTextField, setLocationTextField] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);

  const handleMapClick = async (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(newLocation);
    await fetchAddress(newLocation);
  };

  const handlePlaceChange = async () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setMarkerPosition(newLocation);
        setMapCenter(newLocation);
        await fetchAddress(newLocation);
      }
    }
  };

  const fetchAddress = async ({ lat, lng }) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_MAPS_API}`
      );
      const data = await response.json();
      if (data.status === "OK" && data.results[0]) {
        setLocationText(data.results[0].formatted_address);
      } else {
        setLocationText(`Lat: ${lat}, Lng: ${lng}`);
      }
    } catch (error) {
      setLocationText(`Lat: ${lat}, Lng: ${lng}`);
      console.error("Error fetching address:", error);
    }
  };

  const clearLocationTextField = () => {
    setLocationTextField("\n");
  };

  const onLoadAutocomplete = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  useEffect(() => {
    if (locationText != null) {
      handleInputChange("location", locationText);
      setLocationTextField(locationText);
    }
  }, [locationText]);

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_MAPS_API}
        libraries={libraries}
      >
        <div className="g_map_cont">
          <p>{locationText || "Lugar de grabación"}</p>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "50rem" }}
            center={mapCenter}
            zoom={12}
            onClick={handleMapClick}
            options={{
              mapTypeControl: false,
              streetViewControl: false,
            }}
          >
            <Autocomplete
              onLoad={onLoadAutocomplete}
              onPlaceChanged={handlePlaceChange}
            >
              <div onClick={clearLocationTextField}>
                <Input
                  type="text"
                  id="lugar"
                  name="lugar"
                  value={locationTextField || "Lugar"}
                />
              </div>
            </Autocomplete>
            {locationText ? <Marker position={markerPosition} /> : ""}
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
};

export default GMap;
