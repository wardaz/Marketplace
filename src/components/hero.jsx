import './hero.css'

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import heroslider1 from '../assets/card/heroslider1.png'
import heroslider2 from '../assets/card/heroslider2.jpg'
import heroslider3 from '../assets/card/heroslider3.jpg'

function Hero() {
  return (
    <>
      <header>
        <div className="p-4 m-4 shadow-4 rounded-3" style={{ backgroundColor: "rgb(199, 200, 250)"}}>
          <div className="container">
        <div className="row">
            {/* ----- Left ------*/}
            <div className="col-md-6 col-sm-12 heroleftt1">
              <h1 className="herotext1">Explore, collect, and sell extraordinary <span className="nft">NFTs</span></h1>
              <p className="herotext2">Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.</p>
              <button className="herobtn1">Explore</button>&nbsp;&nbsp;
              <button className="herobtn2">Sell</button>
            </div>

            {/* -----Right------- */}
            <div className="col-md-6 col-sm-12">

              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={heroslider1}
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
                    src={heroslider2}
                    alt="First slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={heroslider3}
                    alt="First slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

            </div>

            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;