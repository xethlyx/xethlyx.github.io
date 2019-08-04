import React from 'react';
import logo from '../images/xe_logo.svg';

import './Header.css';

const Header = (props) => {
  return (
    <div className='navbar docked'>
        <a href='./index.html' className='website-icon-container'><img src={logo} alt='XE'/></a>
        <ul>
            <li><a className='active' href='#content'>Home</a></li>
            <li><a href='#'>Creations</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About</a></li>
        </ul>
    </div>
  )
}

export default Header