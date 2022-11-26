import React from 'react';

import './header.scss';
import people from '../../assets/img/people.png';
import ai from '../../assets/img/ai.png';

const Header = () => {
  return (
    <div>
      <div className="portfolio__header section__padding id=home">
        <div className="portfolio__header-content">
          <h1 className="portfolio__header-title">Hi, I'm Marshal. A Full Stack Developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non labore expedita, odio sed eligendi 
            nisi doloremque repellendus earum nostrum dolores.
          </p>
          <div className="portfolio__header-content__input">
            <input type="email" placeholder='your email address'/>
            <button type='button'>View Projects</button>
          </div>
          <div className="portfolio__header-content__people">
            <img src={people} alt="people" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
         <div className="portfolio__header-image">
            <img src={ai} alt="ai" />
          </div>
      </div>
    </div>
  )
}

export default Header
