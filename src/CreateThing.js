import React, { Component } from 'react';
import ThingForm from './ThingForm';
import MapWithAMarker from './lib/GoogleApi.js'
const API_KEY = process.env.REACT_APP_API_KEY

class Map extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
        <div>
          <p>Map Page </p>
          <ThingForm /><br/>

        </div>
      )
    }
}

export default Map;
