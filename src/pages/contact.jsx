import './contact.css'

import Navbar1 from '../components/navbar'
import Footer from '../components/footer'

import contact from '../assets/other/contact.jpg'

function Contactus() {
    return (
     <>
     <div className="">
        <Navbar1/>
      </div>

      {/* -----------Image------ */}
      <div className="contact-page">
        <img src={contact} alt="" srcset=""/>
        <div className="contact-text">
            <h3>Contact Us</h3>
            <p>Anim pariatur cliche reprehenderit</p>
        </div>
        </div>

{/* Contact form start */}
<div className="container">
    <div className="row" style={{ margin: "25px 0px"}}>
    <div className="col-lg-8 col-md-12">
<div className="contact-form">
        <h4>Do you have any question?</h4>
        <form action="">
        <input type="text" id='name' name='name' placeholder=' Your Name' /><br />
        <input type="email" id='email' name='email' placeholder=' Your Email' /><br />
        <input type="text" name="phone" id="phone" placeholder=' Your Phone'/><br />
        <textarea rows={4} cols={93} > Your Message</textarea><br />
        <button type="submit">Submit Form</button>
        </form>
        </div>
        </div>
{/* Contact form end */}

<div className="col-lg-4 col-md-12 contact-office">
  <div className='US-office'>
        <h6>US Office</h6>
        <span><i class="id-color fa fa-map-marker fa-lg"></i>08 W 36th St, New York, NY 10001</span><br/>
        <span><i class="id-color fa fa-phone fa-lg"></i>+1 333 9296</span><br />
        <span><i class="id-color fa fa-envelope-o fa-lg"></i>
        <a href="warda.capricon11@gmail.com" style={{textDecoration:"none"}}>
          contact@example.com
        </a>
        </span>
        </div><br />

<div className='AU-office'>
<h6>AU Office</h6>
        <span><i class="id-color fa fa-map-marker fa-lg"></i>100 Mainstreet Center, Sydney</span><br/>
        <span><i class="id-color fa fa-phone fa-lg"></i>+1 333 9296</span><br />
        <span><i class="id-color fa fa-envelope-o fa-lg"></i>
        <a href="warda.capricon11@gmail.com" style={{textDecoration:"none"}}>
          contact@example.com
        </a>
        </span>
</div>
</div>



{/* -----row------ */}
    </div>

    {/* -----container------ */}
  </div> 
  
  {/* Footer */}
        <div>
        <Footer/>
        </div>
     </>
    );
  }
  
  export default Contactus;