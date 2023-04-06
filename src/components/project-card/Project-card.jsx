import React from 'react';
import './project-card.scss';

const ProjectCard = (project) => {
  return (
    <div className='projectcard-container'>
      <h1>{project.title}</h1>
      <h2>{project.involvement}</h2>
      <a href={project.liveLink} target='_blank' rel="noreferrer">
        <img src={project.image} alt="project image" />
      </a>
      <p>{project.description}</p>
      <div className="ctas-container">
        <a className="btn-link-overlay" href={project.liveLink} target='_blank' rel="noreferrer">
          <button className="btn-live">Live Site</button>
        </a>
        <a className="btn-link-overlay" href={project.codeLink} target='_blank' rel="noreferrer">
          <button className="btn-code">Code</button>
        </a>
      </div>
    </div>
  )
};

export default ProjectCard;
