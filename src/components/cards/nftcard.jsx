import React from "react";
import './nftcard.css'

import Card from 'react-bootstrap/Card';

export default function NFTcard(props) {
  return (

    (props?.NFTs).map((tokens, i) => {

      return (
        <div className=" d-flex col-lg-3 col-md-6 col-12 mb-3">
          <div className="card-group">
            <Card style={{ backgroundColor: "#e0e1fc" }}>
              <Card.Img variant="top" src={tokens.img} className="p-2" />
              <Card.Body>
                <Card.Title className="tit1">{tokens.name}</Card.Title>
                <Card.Text>
                  <div className='bottom'>
                    <div className='sub1'>{tokens.sub1} <span className="sub2">{tokens.sub2}</span></div>
          
                 
                    <div style={{display:"flex" , justifyContent:"space-between"}}>
                    <div className="sub5">
                        <a href="#">
                          {tokens.sub5}
                        </a>
                      </div>
                      <div style={{display:"flex"}}>
                        <div className='sub3'><i class="fa fa-heart"></i></div>
                        <div className="sub4">{tokens.sub4}</div>
                      </div>

                      
                    </div>

                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      )
    })

  )
}

