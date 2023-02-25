import './itemdetails.css'

import author1 from '../assets/other/author1.jpg'
import trend1 from '../assets/slider/trend1.jpg'
import Footer from '../components/footer';
import Navbar1 from '../components/navbar';


export default function ItemDetails(){
    return(
        <>
    <div className="">
        <Navbar1/>
      </div>

    <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-4">

        <img className="d-block w-100" src={trend1} alt="NFT" style={{margin:"30px 0px"}}/>
        </div>

        {/* Right side start */}
        <div className="col-lg-7 offset-lg-1 col-md-8 mt-4 mb-4">

        <h2>AnimeSailorClub #304</h2>
        <div className='item-boxes'>
          <div className="item-box1">
          <span><i class="fa fa-image"></i> Art</span>
          </div>
          <div className="item-box2">
          <span><i class="fa fa-eye"></i> 250</span>
          </div>
          <div className="item-box3">
          <span><i class="fa fa-heart"></i> 18</span>
          </div>
        </div>
        
        <p className='items-details-para'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
        <div className="creater-collection">
            <div className="item-creater">
            <h6>Creater</h6>   
            <img className="" src={trend1} alt="NFT" />

            <a href="#">
            Monica Lucas
            </a>

            </div>

            <div className="item-collection">
            <h6>Collection</h6>
            <img className="" src={trend1} alt="NFT" />
         
            <a href="#">
            AnimeSailorClub
            </a>
            
            </div>
        </div>

        <h3>Properties</h3>
        <div className='row'>
            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Background</h5>
                    <h4> Yellowish Sky</h4>
                    <span>85% have this trait</span>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Eyes</h5>
                    <h4> Purple Eyes</h4>
                    <span>14% have this trait</span>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Nose</h5>
                    <h4> Small Nose</h4>
                    <span>85% have this trait</span>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Mouth</h5>
                    <h4>Smile Red Lip</h4>
                    <span>61% have this trait</span>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Neck</h5>
                    <h4>Pink Ribbon</h4>
                    <span>85% have this trait</span>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Hair</h5>
                    <h4> Pink Short</h4>
                    <span>35% have this trait</span>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Accessories</h5>
                    <h4> Heart Necklace</h4>
                    <span>33% have this trait</span>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Hat</h5>
                    <h4> Cute Panda</h4>
                    <span>62% have this trait</span>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 item-details-properties">
                <a href="#">
                    <h5>Clothes</h5>
                    <h4>Casual Purple</h4>
                    <span>78% have this trait</span>
                </a>
            </div>
        {/* ----Row end---- */}
        </div>


        <h6>Price</h6>
        <div className="item-details-price">
        <i class="fa-brands fa-ethereum"></i>
        <h5>0.059</h5> 
        <span>($253.67)</span>
        </div>

        <button className='item-details-btn1'> Buy Now</button> &nbsp; &nbsp;
        <button className='item-details-btn2'> Place a Bid</button>
        {/* Right side end */}

        </div>


        </div>
    </div>

        <div className="">
        <Footer/>
      </div>
      </>
);
}