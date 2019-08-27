import React, { Component } from 'react';
import MapWithAMarker from './lib/GoogleApi.js'
import Bike from "./img2/bike.jpg"
import Cardboard from "./img2/cardboard.jpg"
import Trex from "./img2/trex.jpg"
import Zoobomb from "./img2/zoobomb.jpg"
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

class Landing extends Component {
  constructor(props){
    super(props)
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
            <div>
            <p>Landing Page </p>
            <Carousel>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Bike}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cardboard}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Trex}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Zoobomb}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>



            </div>
          )
        }
      }

      export default Landing;
