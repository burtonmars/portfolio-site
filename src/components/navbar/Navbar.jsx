import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.scss';

const Menu = () => (
  <>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#skills">Skills</a></p>
    <p><a href="">Resume</a></p>
    <p><a href="#contact">Contact</a></p>
    <p><a href="">Github</a></p>
    <p><a href="">Linkedin</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <div className="navbar">
    <div className="navbar-links_container">
      <Menu />
    </div>
    <div className="navbar-menu">
      { toggleMenu 
        ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)}/>
      }
      { toggleMenu && (
      <div className="navbar-menu_container scale-up-center">
        <div className="navbar-menu_container-links">
          <Menu />
        </div>
      </div>
        )
      }
    </div>
  </div>
  )
}

export default Navbar;
