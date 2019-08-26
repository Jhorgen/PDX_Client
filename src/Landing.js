import React, { Component } from 'react';

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
        <p>Landing Page </p>
      )
    }
}

export default Landing;
