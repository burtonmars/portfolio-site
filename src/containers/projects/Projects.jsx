import React from 'react'

import './projects.scss';
import { ProjectCard } from '../../components'
import ambientFocusLanding from '../../assets/img/ambient-focus-snapshot.webp';
import portfolioLanding from '../../assets/img/portfolio-screen-shot.webp';
import devacityLanding from '../../assets/img/devacity-screenshot.webp';


const Projects = () => {

  const projects = [
    {
      id: 0,
      title: "Devacity",
      techs: ["React", "Next.JS", "MongoDB"],
      image: devacityLanding,
      description: "An agile project management tool for tracking and managing the capacity of a team of developers.",
      liveLink: "https://devacity-wine.vercel.app/",
      codeLink: "https://github.com/burtonmars/devacity" 
     
    },
        {
    id: 1,
      title: "Ambient Focus",
      techs: ["React", "Next.JS"],
      image: ambientFocusLanding,
      description: "An app that allows users to layer ambient sound samples to create soundscapes that transform their atmosphere in a positive way.",
      liveLink: "https://ambient-focus-chi.vercel.app/",
      codeLink: "https://github.com/burtonmars/Ambient-Focus" 
    },
        {
    id: 2,
      title: "My Portfolio",
      techs: ["React", "Tailwind", "emailJS"],
      image: portfolioLanding,
      description: "My personal portfolio site for highlighting my skills and providing quick access to the live sites and code bases of my most recent projects.",
      liveLink: "",
      codeLink: "https://github.com/burtonmars/portfolio-site" 
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
