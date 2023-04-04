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
        <a href={project.liveLink} target='_blank'>
          <button className="btn-live">Live Site</button>
        </a>
        <a href={project.codeLink} target='_blank'>
          <button className="btn-code">Code</button>
        </a>
      </div>
    </div>
  )
};

export default ProjectCard;
