import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

const MapWrapper = styled.div`
  border-radius: 15px; 
  overflow: hidden; 
  border: 2px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const StyledMapContainer = styled.div`
  height: 140px;
  width: 100%; 
`;

const MapFooter = styled.div`
  text-align: center;
  background-color: #f8f8f8;
  color: #008000; 
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
`;

interface MapPickerProps {
  onLocationSelect?: (coords: { lat: number; lng: number }) => void;
}

const MapPicker: React.FC<MapPickerProps> = ({ onLocationSelect }) => {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setPosition({ lat, lng });
        if (onLocationSelect) {
          onLocationSelect({ lat, lng });
        }
      },
    });

    return null;
  };


  return (
    <MapWrapper>
      <StyledMapContainer>
        <MapContainer
          center={[-15.7942, -47.8822]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler />
          {position && <Marker position={[position.lat, position.lng]} />}
        </MapContainer>
      </StyledMapContainer>
      <MapFooter>Click on the map to add the location</MapFooter>
    </MapWrapper>
  );
};

export default MapPicker;