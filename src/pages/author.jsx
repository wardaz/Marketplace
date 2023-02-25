import './author.css'
import Navbar1 from '../components/navbar'
import Footer from '../components/footer'

import tokens from '../components/cards/nft-card'
import NFTcard from '../components/cards/nftcard';

import React from "react";
import author1 from "../assets/other/author1.jpg";
import author_banner from "../assets/other/author_banner.jpg";



export default function Author() {


    return (
        <>

            <div className="">
                <Navbar1 />
            </div>

            <div className='author-picture'>
                <img src={author_banner} alt="" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-2 mt-5">
                        <div className="author-data">
                            <img src={author1} alt="" />
                            <div className="author-details">
                                <h3>Monica Lucas</h3>
                                <span>@monicaaa</span>
                                <div className="d-flex">
                                    <p>DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</p>
                                    <button> Copy </button>
                                </div>
                            </div>

                            <div className="author-follow">
                                <span>500 followers</span>
                                <button>Follow</button>
                            </div>

                        </div>

                    </div>
                    {/* row end */}
                </div>
                {/* container end */}
            </div>

            {/* ----------buttons---------- */}
            <div className="container">
                <div className="row">
                    <div className="col-12 author-buttons">
                        <button>On Sale</button>
                        <button>Created</button>
                        <button>Liked</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/* <div className="d-flex"> */}
                    <NFTcard NFTs={tokens}/>
                    {/* </div> */}
                </div>
            </div>

            <div className="">
                <Footer />
            </div>
        </>
    )
}