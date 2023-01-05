import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.scss';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <div className="portfolio__navbar">
    <div className="portfolio__navbar-links_container">    
      <Menu />
    </div>
    <div className="portfolio__navbar-menu">
      { toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
      }
      { toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_container-links"><Menu /></div>
          </div>
        )
      }
    </div>
  </div>
  )
}

export default Navbar;
