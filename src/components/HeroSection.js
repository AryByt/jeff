import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import logo from '../assets/images/jefflogo.png';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <img className="imgtag" src={logo} alt="logo" />
      <p>HEY WELCOME TO JEFF-HANDYMAN. </p>
      <p>MY MISSION </p>
      <p>
        I want to take care of all of your Painting,Installation,Repair and many more services for
        the right price!
      </p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          About Me!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
