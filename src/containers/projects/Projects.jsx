import React from 'react'

import './projects.scss';
import { ProjectCard } from '../../components'

const Projects = () => {
  return (
    <div className="projects__list section__margin" id="projects">
        <div className="projects__list-feature">
            <ProjectCard />
        </div>
        <div className="projects__list-heading">
          <h1 className="projects__list-header">
            Take a look at some of the projects I have developed
          </h1>
          <p>Explore the Library</p>
        </div>
        <div className="projects__list-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
    </div>
  )
}

export default Projects
