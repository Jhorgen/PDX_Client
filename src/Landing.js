import './App.scss';
import React, { Component } from 'react';
import MapWithAMarker from './lib/GoogleApi.js'
import Bike from "./img2/bike.jpg"
import Cardboard from "./img2/cardboard.jpg"
import Castle from "./img2/castle.jpg"
import Darcelle from "./img2/darcelle.jpg"
import Lc from "./img2/lc.jpg"
import Park from "./img2/park.jpg"
import Trex from "./img2/trex.jpg"
import Tunnels from "./img2/tunnels.jpg"
import Voodoo from "./img2/voodoo.jpg"
import Waterfall from "./img2/waterfall.jpg"
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
                  <h3>ZooBomb!</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Cardboard}
                  alt="Second Slide"
                />
                <Carousel.Caption>
                  <h3>Card Board Boat Race</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Trex}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Fire blowing T-Rex on a Bike</h3>
                </Carousel.Caption>
              </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Zoobomb}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>Zoobomb Pile of bikes!</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Castle}
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h3>Witches Castle</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Darcelle}
                alt="Sixth slide"
              />
              <Carousel.Caption>
                <h3>Darcelle's </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Lc}
                alt="Seventh slide"
              />
              <Carousel.Caption>
                <h3>The Lovecraft Bar</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Park}
                alt="Eighth slide"
              />
              <Carousel.Caption>
                <h3>Tiny Park</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Tunnels}
                alt="Ninth slide"
              />
              <Carousel.Caption>
                <h3>Shanghai Tunnels</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Voodoo}
                alt="Tenth slide"
              />
              <Carousel.Caption>
                <h3>Voodoo Doughnuts</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Waterfall}
                alt="Eleventh slide"
              />
              <Carousel.Caption>
                <h3>Chocolate Waterfall</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Zoobomb}
                alt="Twelvth slide"
              />
              <Carousel.Caption>
                <h3>ZooBomb!</h3>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            </div>
          )
        }
      }



      export default Landing;
