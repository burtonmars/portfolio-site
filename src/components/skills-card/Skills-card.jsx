import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './skills-card.scss';

function SkillsCard(props) {
   const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const jiggleImageTimeline = gsap.timeline({ paused: true });

    jiggleImageTimeline.to(image, {
      duration: 0.2,
      rotation: 5,
      repeat: 5,
      yoyo: true,
    });

    function handleScroll() {
      const bounds = image.getBoundingClientRect();

      if (
        bounds.top < window.innerHeight &&
        bounds.bottom > 0 &&
        bounds.left < window.innerWidth &&
        bounds.right > 0
      ) {
        const visiblePercentage =
          (window.innerHeight - bounds.top) / bounds.height;

        jiggleImageTimeline.timeScale(visiblePercentage).restart();
      } else {
        jiggleImageTimeline.pause();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const skillsList = props.skills.map((skill) =>
    <li key={skill.id}>{skill.value}</li>
  );

  return (
    <div className='skills-card-container'>
      <div className="skills-text">
        <h2>{props.title}</h2>
        <ul>{skillsList}</ul>
      </div>
      <div className="skills-img">
        <img ref={imageRef} src={props.img} alt="" />
      </div>
    </div>
  )
}

export default SkillsCard


