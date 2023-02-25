import React from "react";
import './profile.css'
import Navbar1 from '../components/navbar'
import Footer from '../components/footer'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import author1 from '../assets/other/author1.jpg'
import author_banner from '../assets/other/author_banner.jpg'
import { useState } from 'react';

export default function Profile() {
    const [profile, setProfile] = useState(1)


    const profileTabs = (index) => {
        setProfile(index)
    }

    return (
        <>
            <div className="">
                <Navbar1 />
            </div>


            <div className="container">
                <div className="row">
                    <ul className="col-lg-12 profile-line-button">
                        <li className={profile === 1 ? "active-profile-btns" : "profile-btns"} onClick={() => profileTabs(1)}><span><i class="fa fa-user"></i>  Profile</span></li>
                        <li className={profile === 2 ? "active-profile-btns" : "profile-btns"} onClick={() => profileTabs(2)}><span><i class="fa fa-exclamation-circle" onClick={() => Profile(2)}></i>  Notifications</span> </li>
                        <li className={profile === 3 ? "active-profile-btns" : "profile-btns"} onClick={() => profileTabs(3)}><span><i class="fa fa-paint-brush" onClick={() => Profile(3)}></i>  Appearance</span> </li>
                    </ul>
                </div>
            </div>


            <div className="container">
                <div className="row">
                
                    <div className="col-lg-8">
                        <div className={profile === 1 ? "active-profile-content" : "profile-content"}>
                            <h6>Username</h6>
                            <input type="text" className="profile-textarea" placeholder="Enter username" /><br /><br />

                            <h6>Custom URL</h6>
                            <input type="text" className="profile-textarea" placeholder="Enter Enter your custom URL" /><br /><br />

                            <h6>Bio</h6>
                            <input type="text" className="profile-textarea" placeholder="Tell the world who you are" /><br /><br />

                            <h6>Email Address*</h6>
                            <input type="text" className="profile-textarea" placeholder="Enter email" /><br /><br />

                            <h6><i class="fa fa-link"></i> Your site</h6>
                            <input type="text" className="profile-textarea" placeholder="Enter the Website URL" /><br /><br />

                            <h6><i class="fa fa-twitter"></i> Twitter username</h6>
                            <input type="text" className="profile-textarea" placeholder="Enter Twitter username" /><br /><br />

                            <h6><i class="fa fa-instagram"></i> Instagram username</h6>
                            <input type="text" className="profile-textarea" placeholder="Enter Instagram username" /><br /><br />

                            <Button variant="primary" size="sm">Update profile</Button>{' '}
                            {/* ----usestate---- */}
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div className="author-profile-1">
                            <h6>Profile image <i class="fa fa-info-circle"></i></h6>
                            <img src={author1} alt="" className="author-profile-img-1" />
                        </div>

                        <div className="author-profile-2">
                            <h6>Profile banner <i class="fa fa-info-circle"></i></h6>
                            <img src={author_banner} alt="" className="author-profile-img-2" />
                        </div>
                    </div>


                    {/* Row ends */}
                </div>

                {/* container ends */}
            </div>
            <div className="content-profile-2">
            {/* -----------Notifications------------ */}
            <div className={profile === 2 ? "active-profile-content" : "profile-content"}>

            <div className="container">
                <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="profile-notifications">
                                <div className="profile-notifications-top">
                                    <h5>Item Sold</h5>

                                    <Form>
                                        <Form.Check type="switch" id="custom-switch" label="" />
                                    </Form>
                                </div>
                                <span>When someone purhased your item.</span>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="profile-notifications">
                                <div className="profile-notifications-top">
                                    <h5>Item Sold</h5>

                                    <Form>
                                        <Form.Check type="switch" id="custom-switch" label="" />
                                    </Form>
                                </div>
                                <span>When someone purhased your item.</span>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="profile-notifications">
                                <div className="profile-notifications-top">
                                    <h5>Item Sold</h5>

                                    <Form>
                                        <Form.Check type="switch" id="custom-switch" label="" />
                                    </Form>
                                </div>
                                <span>When someone purhased your item.</span>
                            </div>
                        </div>


                        <div className="col-md-6 col-sm-12">
                            <div className="profile-notifications">
                                <div className="profile-notifications-top">
                                    <h5>Item Sold</h5>

                                    <Form>
                                        <Form.Check type="switch" id="custom-switch" label="" />
                                    </Form>
                                </div>
                                <span>When someone purhased your item.</span>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="profile-notifications">
                                <div className="profile-notifications-top">
                                    <h5>Item Sold</h5>

                                    <Form>
                                        <Form.Check type="switch" id="custom-switch" label="" />
                                    </Form>
                                </div>
                                <span>When someone purhased your item.</span>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="profile-notifications">
                                <div className="profile-notifications-top">
                                    <h5>Item Sold</h5>

                                    <Form>
                                        <Form.Check type="switch" id="custom-switch" label="" />
                                    </Form>
                                </div>
                                <span>When someone purhased your item.</span>
                            </div>
                        </div>

                     
                    {/* ----row end---- */}
                </div>
                {/* ----Container end---- */}
            </div>
   {/* -------usestate---- */}
   </div>
         {/* ------content-profile-------- */}
         </div>  
         <div className="content-profile-2">
            {/* ------------------- Profile----------- */}
            <div className={profile === 3 ? "active-profile-content" : "profile-content"}>        
                <div className="container">
                <div className="row">
                    
                        <div className="col-lg-6">
                            <h5>Language</h5>
                            <span>Select your prefered language.</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    France
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">German</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Japan</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="col-lg-6">
                            <h5>Scheme</h5>
                            <span>Customize how Gigaland looks for you.</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Default scheme
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"> Light scheme</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"> Dark scheme</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> Gray scheme</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        
                </div>

            </div>

                 
{/* ----usestate-------- */}
</div>
{/* -----content-profile-2------ */}
</div>
            <div className="">
                <Footer />
            </div>
      
        </>
    )
}