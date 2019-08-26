import axios from 'axios'
import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props)
        this.state = { message: ""}
    }
    componentDidMount() {
        axios.get('http://localhost:3001/things')
        .then(response => {
            console.log(response)
            this.setState({
                message: response.data.Things
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="Lists-container">
                Message = {this.state.message}
            </div>
        )
    }
}

export default Test;
