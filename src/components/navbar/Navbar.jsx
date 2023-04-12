import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import githubLogo from '../../assets/img/github-mark.webp';
import linkedinLogo from '../../assets/img/LI-In-Bug.webp';

import './navbar.scss';

const Menu = () => (
  <>
    <p><a href='#projects'>Projects</a></p>
    <p><a href="#skills">Skills</a></p>
    <p><a href="Marshal Burton CV.pdf" target='_blank' rel="noreferrer"><button>Resume</button></a></p>
    <p><a href="#contact">Contact</a></p>
    <p className='github-icon'><a href="https://github.com/burtonmars?tab=repositories" target='_blank' rel="noreferrer">
      <img src={githubLogo} alt="Github" /></a>
    </p>
    <p className='linkedin-icon'><a href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">
      <img src={linkedinLogo} alt="Linkedin" /></a>
    </p>
    <p className='github-text' ><a href="https://github.com/burtonmars?tab=repositories" target='_blank' rel="noreferrer">
      Github</a>
    </p>
    <p className='linkedin-text' ><a href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">
      Linkedin</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
  <div className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
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
