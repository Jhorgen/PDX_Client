import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'

class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
          things: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/things')
        .then(response => {
            console.log(response)
            this.setState({
                things: response.data
            })
        })
        .catch(error => console.log(error))
    }


    render() {
      const {things} = this.state;
      console.log(things)
      return (

        <div>
          <ol>
            {things.map((thing, index) => (
              <li>
                <p>Name: {thing.name}</p>
                <p>: {thing.name}</p>
              </li>
            ))}
          </ol>
        </div>
      )
    }
}

export default Categories;
