import 'leaflet-polylinedecorator';

import * as helpers from '@turf/helpers';

import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import React, { useState } from 'react';

import { default as bezierSpline } from '@turf/bezier-spline';
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

const buildSpline = (coords) => {
  const line = helpers.lineString(
    coords.map((lngLat) => [lngLat[1], lngLat[0]])
  );
  return bezierSpline(line);
};

const CENTER = [parks.origin.lat, parks.origin.lng];
const DEFAULT_ZOOM = 12;

const DirectionRoutes = ({ coords }: any) => {
  return <GeoJSON data={coords} />;
};

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

  if (typeof window === undefined) {
    return null;
  }

  return (
    <Wrapper>
      {typeof window !== undefined ? (
        <MapContainer {...mapSettings}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Object.keys(parks).map((park, i) => {
            const position = [parks[park].lat, parks[park].lng];
            return (
              <Marker
                key={i}
                position={position}
              />
            );
          })}
          <DirectionRoutes coords={buildSpline(coords)} />
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
