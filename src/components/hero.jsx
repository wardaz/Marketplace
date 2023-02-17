import './hero.css'
      
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import heroslider1 from '../assets/slider/heroslider1.png'
// import heroslider2 from '../assets/slider/heroslider2.jpg'
// import heroslider3 from '../assets/slider/heroslider3.jpg'

function Hero() {
  return (
    <>
    <header>
    <div className="p-4 m-4 shadow-4 rounded-3" style={{ backgroundColor: "hsl(0, 0%, 94%)" }}>
         <div className="container">
         
         {/* ----- Left ------*/}
          <div className="col-lg-6">
            <h1>Explore, collect, and sell extraordinary <span className="nft">NFTs</span></h1>
          <p className="herotext1">Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.</p>
          <button className="herobtn1">Explore</button>&nbsp;&nbsp;
          <button className="herobtn2">Sell</button>
          </div>
         
          {/* -----Right------- */}
          <div className="col-lg-6">
      
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
          src={heroslider1}
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
          src={heroslider1}
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
</header>
    </>
  );
}

export default Hero;