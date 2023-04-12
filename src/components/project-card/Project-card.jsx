import React from 'react';
import './project-card.scss';

const ProjectCard = (project) => {

  return (
    <div className='projectcard-container'>
      <div className="projectcard__h1-container">
        <h1>{project.title}</h1>
      </div>
      <div className='tech-tags'>{project.techs.map(tech => <div className='tech-tags-p'><p>{tech}</p></div>)}</div>
      <a className='project-img-wrapper' href={project.liveLink} target='_blank' rel="noreferrer">
        <img src={project.image} alt="project image" />
      </a>
      <p className='project-description-p'>{project.description}</p>
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
