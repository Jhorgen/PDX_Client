import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios'
import Navbar from './Navbar.js'
import Content from './Content.js'
import SignupForm from './containers/Signup.js'


class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        page: "Home"
      }
  }


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
