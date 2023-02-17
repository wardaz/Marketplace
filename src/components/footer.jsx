import './footer.css'
import React from 'react';

export default function Footer(){
    return(
    <>
<footer className="text-center text-lg-start bg-light text-muted foot">
{/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">

 

</section> */}


<section className="">
  <div className="container text-center text-md-start mt-5">

    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
   
        <h6 className="text-uppercase fw-bold mb-4 foot-heading">
          <i className="fas fa-gem me-3 foot-heading"></i>Get the latest updates
        </h6>
        <p>
        Signup for our newsletter to get the latest updates in your inbox.
        </p>
        <div lg='3' md='12' className='mb-4 mb-md-0'>
             
              <form class="d-flex input-group w-auto w-100">
                <input
                  type="search"
                  class="form-control"
                  placeholder="Enter your Email"
                  aria-label="Search"
                />
                <button
                  class="btn btn-primary footbtn"
                  type="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </form>

            </div>
      </div>
      
      
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
        <h6 className="text-uppercase fw-bold mb-4 foot-heading">
        Marketplace
        </h6>
        <p>
          <a href="#!" className="text-reset text-items">All NFTs</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Art</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Music</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Domain Names</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Virtual World</a>
        </p>
      </div>
      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 foot-heading">
          Resources
        </h6>
        <p>
          <a href="#!" className="text-reset text-items">Help Center</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Partners</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Suggestions</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Discord</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Docs</a>
        </p>
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 foot-heading">
          Community
        </h6>
        <p>
          <a href="#!" className="text-reset text-items">Community</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Documentation</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Brand Assets</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Forum</a>
        </p>
        <p>
          <a href="#!" className="text-reset text-items">Mailing List</a>
        </p>
      </div>
      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
        <h6 className="text-uppercase fw-bold mb-4 foot-heading">Join the community</h6>
        <div class="social-iconsall" >
                              <button className='socialbtn'><a href="#"><i class="socialicons fab fa-facebook-f px-2"></i></a></button> {' '} 
                              <button className='socialbtn'> <a href="#"><i class="socialicons fa-brands fa-twitter px-2"></i></a></button>{' '}
                              <button className='socialbtn'><a href="#"><i class="socialicons fa-brands fa-instagram px-2"></i></a></button>{' '}
                              <button className='socialbtn'><a href="#"><i class="socialicons fa-brands fa-youtube px-2"></i></a></button>{' '}
                              <button className='socialbtn'> <a href="#"><i class="socialicons fa-solid fa-envelope px-2"></i></a></button>{' '}
                            </div>
      </div>
  
    </div>
   
  </div>
</section>

<div className="text-center p-2 mt-2 border-top" style={{backgroundColor:"rgba(0, 0, 0, 0.05); "}}>
  © 2021 Copyright:
  <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>

</footer>
 
  </>
  )
}