import React, { Component } from 'react';
import Landing from './Landing.js'
import Categories from './Categories.js'
<<<<<<< HEAD
import ThingForm from './ThingForm.js'
=======
import SignupForm from './containers/Signup.js'
>>>>>>> 26b6b78e032ebb2eddf96f32bd591aac472cedea
import Map from './Map.js'
import './App.scss';

class Content extends Component {
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
        const page = this.props.page
        console.log('here', page)
        if(page == "Home"){
          return (
            <Landing />
          )
        }
        if(page == "Map"){
          return (
            <Map />
          )
        }
        if(page == "Categories"){
          return (
            <Categories/>
          )
        }
        if(page == "ThingForm"){
          return (
            <ThingForm />
          )
        }


        if(page == "Signup"){
          return (
            <SignupForm/>

          )}


        return (
          <p>thasdf</p>
        )
    }
}

export default Content;
