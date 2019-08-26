import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Navbar from './Navbar.js'
import MapWithAMarker from './lib/GoogleApi.js'
import Content from './Content.js'


class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        page: "Home"
      }
  }

      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px`, width: '1000px', float: 'right' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );


  changePage = newPage => {
    this.setState({
      page: newPage
    })
  }

  render(){
    return (
      <div className="App">
      <Navbar callback={this.changePage}/>
      <Content page={this.state.page} />

      </div>
    );

  }

}

export default App;
// # open /Applications/Google\ Chrome.app --args --disable-web-security
