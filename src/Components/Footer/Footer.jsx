import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.png"
import { FaUser } from "react-icons/fa"; // User icon
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">

        {/* Left Section */}
        <div className="footer-top-left">
          <img src={logo} alt="Footer Logo" />
          <p>I am a frontend developer from Andhra Pradesh with 5 years of experience.</p>
        </div>

        {/* Right Section */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUser className='fauser footer-icon'/>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>

      </div>
       <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Amani Akulaa. All rights reserved.
        </p>
       
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


