import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

import './cta.scss';

const CTA = () => {
  const ctaButton = useRef(null);

  useEffect(() => {
    const button = ctaButton.current;

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    function handleMouseEnter() {
      TweenMax.to(button, 0.3, { scale: 1.1 });
    }

    function handleMouseLeave() {
      TweenMax.to(button, 0.3, { scale: 1 });
    }

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className='cta-container'>
      <h2>Marshal Burton</h2>
      <h1>A Full Stack Developer</h1>
      <h3>I'm hard-working, ambitious, always learning, detail oriented, and
        a great team player
      </h3>
      <a ref={ctaButton} href="#projects">
          <button className='cta-button'>My Work</button>
      </a>
    </div>
  )
}

export default CTA