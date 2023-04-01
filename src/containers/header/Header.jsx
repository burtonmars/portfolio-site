import React from 'react';
import { CTA } from '../../components';
import workFromHome from '../../assets/img/S5_Working-from-home.png';

import './header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header-cta-card">
        <CTA />
      </div>
      <div className="header-img">
        <img src={workFromHome} alt="" />
      </div>
    </div>
  )
}

export default Header
