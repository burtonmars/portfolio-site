import React from 'react'

import './projects.scss';
import { ProjectCard } from '../../components'
import ambientFocusLanding from '../../assets/img/ambient-focus-snapshot.webp';
import portfolioLanding from '../../assets/img/portfolio-screen-shot.webp';
import theBlackFigLanding from '../../assets/img/theblackfig-screenshot.webp';


const Projects = () => {

  const projects = [
        {
    id: 1,
    id: 0,
      title: "Ambient Focus",
      techs: ["React", "Next.JS", "SCSS", "Figma"],
      image: ambientFocusLanding,
      description: "An app that allows users to layer ambient sound samples to create soundscapes that transform their atmosphere in a positive way.",
      liveLink: "https://ambient-focus-chi.vercel.app/",
      codeLink: "https://github.com/burtonmars/Ambient-Focus" 
    },
        {
    id: 2,
      title: "My Portfolio",
      techs: ["React", "Tailwind", "emailJS", "SCSS", "Figma"],
      image: portfolioLanding,
      description: "My personal portfolio site for highlighting my skills and providing quick access to the live sites and code bases of my most recent projects.",
      liveLink: "",
      codeLink: "https://github.com/burtonmars/portfolio-site" 
    },
    {
      title: "Restaurant Webpage",
      techs: ["React", "Next.JS", "SCSS", "Figma"],
      image: theBlackFigLanding,
      description: "A responsive website built for a fictional restaurant that allows customers to view the menu, make reservations, and contact the restaurant.",
      liveLink: "https://the-black-fig.vercel.app/",
      codeLink: "https://github.com/burtonmars/the-black-fig" 
     
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
