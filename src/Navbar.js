import React, { Component } from 'react';

class Navbar extends Component {
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
          <div className="jumbotron">Keep Portland Weird</div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" onClick={() => this.props.callback("Home")} href="#">PDX Weird S**t</a>
              <a class="nav-item nav-link active" onClick={() => this.props.callback("Home")} href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" onClick={() => this.props.callback("Categories")} href="#">Categories</a>
              <a class="nav-item nav-link" onClick={() => this.props.callback("Map")} href="#">Map</a>
          </nav>
          </div>
        )
    }
}

export default Navbar;
