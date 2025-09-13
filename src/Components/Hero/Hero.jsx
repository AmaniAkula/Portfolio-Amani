import React from 'react'
import './Hero.css'
import profile_img from '../../assets/portfolio.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
   <div id='home' className="hero">
      <img src={profile_img} alt="Alex Bennett profile picture"  className='profile-img'/>
      <h1><span>I’m Amani Akula,</span> frontend developer based in AP.</h1>
      <p>I am a frontend developer from AP, 5 years of experience in multiple companies like Mindtree, Guidesly and ScaleUp.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};


export default Hero