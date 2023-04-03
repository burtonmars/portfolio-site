import React from 'react'

import './projects.scss';
import { ProjectCard } from '../../components'
import teatopiaLanding from '../../assets/img/teatopia-landing.PNG';


const Projects = () => {

  const projects = [
    {
      id: 0,
      title: "Teatopia",
      involvement: "Frontend design and development",
      image: teatopiaLanding,
      description: "A website for a fictional Tea company" 
    }
  ]

  return (
    <div className="projects-list h-screen" id="projects">
      <ProjectCard {...projects[0]}/>
      <ProjectCard {...projects[0]}/>
      <ProjectCard {...projects[0]}/>
    </div>
  )
}

export default Projects
