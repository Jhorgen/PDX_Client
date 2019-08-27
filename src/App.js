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
<<<<<<< HEAD
        <Navbar callback={this.changePage}/>
        <Content page={this.state.page} />
        <SignupForm />
        
=======
      <Navbar callback={this.changePage}/>
      <Content page={this.state.page} />

>>>>>>> 26b6b78e032ebb2eddf96f32bd591aac472cedea
      </div>
    );

  }

}

export default App;
// # open /Applications/Google\ Chrome.app --args --disable-web-security
