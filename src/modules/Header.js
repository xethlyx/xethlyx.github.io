import React from 'react';
import logo from '../images/xe_logo.svg';

import './Header.css';

const Header = (props) => {
  function isElementActive(id) {
    if (props.currentPage === id) {
      return("active")
    } else {
      return("")
    }
  }

  function getNavbarClasses() {
    if (props.docked) {
      return("navbar docked")
    } else {
      return("navbar")
    }
  }

  return (
    <div id="navbar" className={getNavbarClasses()}>
        <a href="#begin" className="website-icon-container"><img src={logo} alt="XE"/></a>
        <ul>
            <li><a id="Home" className={isElementActive("Home")} onClick={props.handleChangePage} href="#navbar">Home</a></li>
            <li><a id="Creations" className={isElementActive("Creations")} onClick={props.handleChangePage} href="#navbar">Creations</a></li>
            <li><a id="Contact" className={isElementActive("Contact")} onClick={props.handleChangePage} href="#navbar">Contact</a></li>
            <li><a id="About" className={isElementActive("About")} onClick={props.handleChangePage} href="#navbar">About</a></li>
        </ul>
    </div>
  )
}

export default Header