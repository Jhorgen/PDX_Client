import React, { Component } from 'react';

import './App.scss';

import ThingForm from './ThingForm';

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
        <div></div>
      )
    }
}

export default Map;
