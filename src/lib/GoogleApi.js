import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";



const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    onClick={(e) => props.callback(e)}

    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
    <Marker
      position={{ lat: -33.399, lng: 150.644 }}
    />
  </GoogleMap>
));

export default MapWithAMarker;
