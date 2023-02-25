import './trendslider.css';
import trending from './trendnft.js';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TrendSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    className: "center",
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          width: 550,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      // {
      //   breakpoint: 375,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // },
      // {
      //   breakpoint: 320,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  }

  return (
    <>
      <div className="container">
        <Slider {...settings}>{
          trending.map((trending, i) => {

            return (

              <div className="card-group">
                <Card style={{ width: '250px', height: '290px', margin: '5px', backgroundColor:"#e0e1fc" }}>
                  <Card.Img variant="top" src={trending.img} className="p-2" />
                  <Card.Body>
                    <Card.Title className="tit1">{trending.name}</Card.Title>
                    <Card.Text>
                      <div className='bottom'>
                        <div className='sub1'>{trending.sub1}</div>
                        <div className='sub2'> {trending.sub2}</div>
                        <div className='sub3'><i class="fa fa-heart"></i></div>
                        <div className="sub4">{trending.sub4}</div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }</Slider>
      </div>
    </>
  )
}

export default TrendSlider;