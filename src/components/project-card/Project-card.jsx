import React from 'react';
import './project-card.scss';

const ProjectCard = ({title, text}) => {
  return (
    <div className='projectcard-container'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
};

export default ProjectCard;
