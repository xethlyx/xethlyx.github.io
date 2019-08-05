import React from 'react';
import logo from '../images/xe_logo.svg'

import './ParallaxBackground.css';

const ParallaxBackground = (props) => {
  return (
    <div className="parallax-module-container">
      <div className="parallax-container"></div>
      <img className="parallax-logo" src={logo} alt="" />
      <div className="main-header">
        <h1>xethlyx</h1>
        <h3>My personal website</h3>
      </div>
    </div>
  )
}

export default ParallaxBackground