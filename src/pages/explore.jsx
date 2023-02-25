// import '../components/slider/trendslider.css';
// import trending from '../components/slider/trendnft';

import NavDropdown from 'react-bootstrap/NavDropdown';

import tokens from '../components/cards/nft-card-explore';
import NFTcard from '../components/cards/nftcard';

import React from "react";

import './explore.css'
import Navbar1 from '../components/navbar'
import Footer from '../components/footer'

import contact from '../assets/other/contact.jpg'


export default function Explore() {
  return (
    <>
      <div className=''>
        <Navbar1 />
      </div>

      <div className="explore-page">
        <img src={contact} alt="" srcset="" />
        <h3 className="explore-text">Explore</h3>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="explore-search">
              <input type="text" placeholder='search item here...' />
              <button type="submit"> <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>

          <div className="col-md-2 d-flex align-items-center">
            <div className="explore-dropdowns-1">
              <NavDropdown title="All categories" id="basic-nav-dropdown" className='px-3 explore-drops' >
                <NavDropdown.Item href="#action/3.1">Art</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Music
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Domain Names</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Virtual World
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>

          <div className="col-md-2 d-flex align-items-center">
            <div className="explore-dropdowns-2">
              <NavDropdown title="Buy Now" id="basic-nav-dropdown" className='px-3 explore-drops' >
                <NavDropdown.Item href="#action/3.1">On Auction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Has Offers
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>

          <div className="col-md-2 d-flex align-items-center">
            <div className="explore-dropdowns-3">

              <NavDropdown title="All Items" id="basic-nav-dropdown" className='px-3 explore-drops' >
                <NavDropdown.Item href="#action/3.1">Single Items</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Bundles
                </NavDropdown.Item>
              </NavDropdown>
            </div>

          </div>

          {/* Row end here */}
        </div>
        {/* container ends here */}
      </div>

      <div className="container">
        <div className="row">
          {/* <div className=" d-flex col-md-3 col-2"> */}
          <NFTcard NFTs={tokens} />
          {/* </div> */}
        </div>
      </div>



      <div className=''>
        <Footer />
      </div>

    </>
  )
}