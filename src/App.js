import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Navbar from './Navbar.js'
import MapWithAMarker from './lib/GoogleApi.js'

function App() {
  return (
    <div className="App">
      <Navbar />

      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJLlQVUA2SO6a9OMFpcrcwv_9c2vH9JJU&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px`, width: '1000px', float: 'right' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
// # open /Applications/Google\ Chrome.app --args --disable-web-security
