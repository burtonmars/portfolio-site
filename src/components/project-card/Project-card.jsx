import React from 'react';
import './project-card.scss';

const ProjectCard = (project) => {

  const techTags = getListOfStringWithID(project.techs);

  return (
    <div className='projectcard-container'>
      <div className="projectcard__h1-container">
        <h1>{project.title}</h1>
      </div>
      <div className='tech-tags'>{techTags.map(tech => <div className='tech-tags-p' key={tech.id}><p>{tech.value}</p></div>)}</div>
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

/**
 * Create a list of objects with an incremental ID and a value for each string in a given list.
 * @param {Array<string>} list - The list of strings to create objects from.
 * @returns {Array<Object>} - The list of objects with an ID and value for each input string.
 */
function getListOfStringWithID(listOfString) {
  var result = [];
  var id = 0;
  
  for (var i = 0; i < listOfString.length; i++) {
    result.push({id: id, value: listOfString[i]});
    id++;
  }
  
  return result;
}

export default ProjectCard;
