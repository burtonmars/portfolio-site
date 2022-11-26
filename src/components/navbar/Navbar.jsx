import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  return (
  <div className="portfolio__navbar">
    <div className="porfolio__navbar-links">
      <div className="portfolio__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  </div>
  )
}

export default Navbar;
