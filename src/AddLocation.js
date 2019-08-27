import React, { Component } from 'react';
import MapWithAMarker from './lib/GoogleApi.js'
const API_KEY = process.env.REACT_APP_API_KEY

class LocationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
          lat: "",
          lng: ""
        }
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

    handleClick = (event) => {
      console.log("here", event)
      this.setState({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      })
    }

    handleLatChange = (event) => {
      console.log(event)
      this.setState({ lat: event.target.value})
    }

    handleLngChange = (event) => {
      console.log(event)
      this.setState({ lng: event.target.value})
    }




    render() {
      return (
        <div>
        <MapWithAMarker
          callback={this.handleClick}
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY +
          "&v=3.exp&libraries=geometry,drawing,places"}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px`, width: '1000px', float: 'right' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <p> Add a Location (click map to fill fields)</p>
        <input className="" value={this.state.lat} onChange={(e) => this.handleLatChange(e)} /> <br/>
        <input className="" value={this.state.lng} onChange={(e) => this.handleLngChange(e)} />
        </div>
      )
    }
}

export default LocationForm;
