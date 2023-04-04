import React from 'react'

import './projects.scss';
import { ProjectCard } from '../../components'
import teatopiaLanding from '../../assets/img/teatopia-landing.PNG';
import portfolioLanding from '../../assets/img/portfolio-screen-shot.PNG';
import regalityLanding from '../../assets/img/regality-brands-screen-shot.PNG';


const Projects = () => {

  const projects = [
    {
      id: 0,
      title: "Teatopia",
      involvement: "Frontend design and development",
      image: teatopiaLanding,
      description: "A website for a fictional Tea company. Made with HTML/SCSS",
      liveLink: "https://teatopia.online/",
      codeLink: "https://github.com/burtonmars/teatopia" 
    },
        {
    id: 1,
      title: "My Portfolio",
      involvement: "Frontend design and development",
      image: portfolioLanding,
      description: "My personal portfolio (this site). Made with React, Next.JS, and Tailwind.",
      liveLink: "",
      codeLink: "https://github.com/burtonmars/portfolio-site" 
    },
        {
    id: 2,
      title: "Regality Brands",
      involvement: "Frontend design and development",
      image: regalityLanding,
      description: "A website for a fictional Branding agency. Made using HTML/SCSS",
      liveLink: "http://regalitybrands.online/",
      codeLink: "https://github.com/burtonmars/regality-brands" 
    }
  ]

  return (
    <div className="projects-list h-screen" id="projects">
      <ProjectCard {...projects[0]}/>
      <ProjectCard {...projects[1]}/>
      <ProjectCard {...projects[2]}/>
    </div>
  )
}

export default Projects
