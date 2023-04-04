import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import githubLogo from '../../assets/img/github-mark.png';
import linkedinLogo from '../../assets/img/LI-In-Bug.png';

import './navbar.scss';

const Menu = () => (
  <>
    <p><a href='#projects'>Projects</a></p>
    <p><a href="#skills">Skills</a></p>
    <p><a href="Marshal Burton CV.pdf" target='_blank'><button>Resume</button></a></p>
    <p><a href="#contact">Contact</a></p>
    <p><a href="https://github.com/burtonmars?tab=repositories" target='_blank'>
      <img src={githubLogo} alt="Github" /></a>
    </p>
    <p><a href="https://www.linkedin.com/in/marshal-burton/" target='_blank'>
      <img src={linkedinLogo} alt="Linkedin" /></a>
      </p>
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
