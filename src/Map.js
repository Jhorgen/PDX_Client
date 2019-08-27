import React, { Component } from 'react';
import LocationForm from './AddLocation';
import './App.scss';
import MapWithAMarker from './lib/GoogleApi.js'
const API_KEY = process.env.REACT_APP_API_KEY

class Map extends Component {
    constructor(props){
        super(props)
    }
    // componentDidMount() {
    //     axios.get('http://localhost:3001/things')
    //     .then(response => {
    //         console.log(response)
    //         this.setState({
    //             message: response.data.Things
    //         })
    //     })
    //     .catch(error => console.log(error))
    // }

    render() {
      return (
        <div className="wrapper">
        <div className="map_info">
        <p> xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of </p>
        </div>
        <div className ="googlemap">
        <MapWithAMarker
              googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY +
        "&v=3.exp&libraries=geometry,drawing,places"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px`, width: '1000px', float: 'right' }} />}
        mapElement={<div style={{ height: `70%`, width: `70%` }} />}
        />
        </div>
        </div>
      )
    }
}

export default Map;
