import React, { Component } from 'react';
import LocationForm from './AddLocation';

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
        <div>
        <p>Map Page </p>
        <LocationForm />
        </div>
      )
    }
}

export default Map;
