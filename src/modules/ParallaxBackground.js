import React from 'react';
import logo from '../images/xe_logo.svg'

import './ParallaxBackground.css';

const ParallaxBackground = () => {
  return (
    <div className="parallax-module-container">
      <div className="parallax-container"></div>
      <img className="parallax-logo" src={logo} alt="" />
      <div className="main-header">
        <h1>xethlyx</h1>
        <button>CONTACT</button>
        <button>ABOUT</button>
      </div>
    </div>
  )
}

export default ParallaxBackground;