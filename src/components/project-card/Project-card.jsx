import React from 'react';
import './project-card.scss';

const ProjectCard = (project) => {
  return (
    <div className='projectcard-container'>
      <h1>{project.title}</h1>
      <h2>{project.involvement}</h2>
      <img src={project.image} alt="" />
      <p>{project.description}</p>
      <div className="ctas-container">
        <button className="btn-live">
          Live Site
        </button>
        <button className="btn-code">
          Code
        </button>
      </div>
    </div>
  )
};

export default ProjectCard;
