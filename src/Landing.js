import React, { Component } from 'react';
import MapWithAMarker from './lib/GoogleApi.js'
const API_KEY = process.env.REACT_APP_API_KEY

class Landing extends Component {
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
        <div>
        <p>Landing Page </p>
        <MapWithAMarker
              googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY +
        "&v=3.exp&libraries=geometry,drawing,places"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px`, width: '1000px', float: 'right' }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
      )
    }
}

export default Landing;
