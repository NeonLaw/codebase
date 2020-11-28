import L from 'leaflet';

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import React, { useState } from 'react';

import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';

const Wrapper = styled.div`
  .leaflet-container {
    width: 100%;
    height: 35vh;
    z-index: 1;
  }
`;

const parks = {
  destination: {
    lat: 36.17567,
    lng: -115.06226,
    name: '715 N Nellis Blvd, Las Vegas, NV 89110',
  },
  origin: {
    lat: 36.20118,
    lng: -115.17613,
    name: '2612 Glory View Ln, North Las Vegas, NV 89032',
  },
};

const CENTER = { lat: parks.origin.lat, lng: parks.origin.lng };
const DEFAULT_ZOOM = 12;

export const VegasDirections = () => {
  const [activePark, setActivePark] = useState<any>(null);

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: useMediaQuery({ query: '(max-width: 800px)' }) ? 10 : DEFAULT_ZOOM,
  };

  const coords = [
    [parks.origin.lat, parks.origin.lng],
    [parks.destination.lat, parks.destination.lng],
  ];

  return (
    <Wrapper>
      {typeof window !== undefined ? (
        <MapContainer {...mapSettings}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // eslint-disable-next-line
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {Object.keys(parks).map((park, i) => {
            const position = { lat: parks[park].lat, lng: parks[park].lng };
            return (
              <Marker
                key={i}
                position={position}
              />
            );
          })}
          {activePark && (
            <Popup
              position={[activePark.lat, activePark.lng]}
              onClose={() => {
                setActivePark(null);
              }}
            >
              <div>
                <h3>{activePark.name}</h3>
              </div>
            </Popup>
          )}
        </MapContainer>
      ) : null}
    </Wrapper>
  );
};
