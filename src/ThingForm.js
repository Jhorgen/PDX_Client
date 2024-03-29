import React, { Component } from 'react';
import MapWithAMarker from './lib/GoogleApi.js'
import axios from 'axios'
import './App.scss';


const API_KEY = process.env.REACT_APP_API_KEY

class ThingForm extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: "",
          content: "",
          rating: "",
          tag: "",
          lat: "",
          lng: ""
        }
    }

    handleChange = (evt) => {
      this.setState({[evt.target.name]: evt.target.value });
    }


    handleSubmit = (event) => {
      console.log('here submitted')
      axios.post('http://localhost:3000/things', ({name: this.state.name}))
         .then(response => {
             console.log(response)
             this.setState({
                 message: response.data.Things
             })
         })
         .catch(error => console.log(error))

    }

    handleClick = (event) => {
      console.log("here", event)
      this.setState({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      })
    }

    // handleLatChange = (event) => {
    //   console.log(event)
    //   this.setState({ lat: event.target.value})
    // }
    //
    // handleLngChange = (event) => {
    //   console.log(event)
    //   this.setState({ lng: event.target.value})
    // }



    render() {
      return (
        <div>
        <div className="wrapper">
        <div className="map_info">
          <p> xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of </p>
        </div>
          <div className="googlemap">
          <MapWithAMarker
              callback={this.handleClick}
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY +
          "&v=3.exp&libraries=geometry,drawing,places"}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px`, width: '1000px', float: 'right' }} />}
          mapElement={<div style={{ height: `70%`, width: `70%` }} />}
          />

          </div>
          </div>
          <h1>Add Thing</h1>
          <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange} />
          <br/>
          <label>Description</label>
            <input type="text" name="content" onChange={this.handleChange} />
          <br/>
          <label>Rating</label>
            <input type="number" name="rating" onChange={this.handleChange} />
          <br/>
          <label>Category</label>
            <input type="text" name="tag" onChange={this.handleChange} />

          <div>
            <p> Add a Location (click map below to fill fields)</p>
            <input className="" value={this.state.lat} onChange={(e) => this.handleLatChange(e)} />
            <br/>
            <input className="" value={this.state.lng} onChange={(e) => this.handleLngChange(e)} />
            <br/>
            <button value="Submit" name="Submit" type="button" onClick={this.handleSubmit}> Submit</button> <br/> <br/>
          </div>

          <br/>
          </div>
      )
    }
}

export default ThingForm;
