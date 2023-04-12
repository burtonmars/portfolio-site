import React from 'react'

import './projects.scss';
import { ProjectCard } from '../../components'
import teatopiaLanding from '../../assets/img/teatopia-landing.webp';
import portfolioLanding from '../../assets/img/portfolio-screen-shot.webp';
import theblackFigLanding from '../../assets/img/theblackfig-screenshot.webp';


const Projects = () => {

  const projects = [
    {
      id: 0,
      title: "Tea Sales Webpage",
      techs: ["Adobe XD", "HTML", "CSS"],
      image: teatopiaLanding,
      description: "A responsive website for a fictional Tea company. Designed and built from scratch with plain HTML/CSS",
      liveLink: "https://teatopia.online/",
      codeLink: "https://github.com/burtonmars/teatopia" 
    },
        {
    id: 1,
      title: "My Portfolio",
      techs: ["React", "Tailwind", "emailJS", "HTML", "SCSS", "Figma"],
      image: portfolioLanding,
      description: "My personal portfolio (this site).",
      liveLink: "",
      codeLink: "https://github.com/burtonmars/portfolio-site" 
    },
        {
    id: 2,
      title: "Restaurant Webpage",
      techs: ["React", "Next.JS", "HTML", "SCSS", "Figma"],
      image: theblackFigLanding,
      description: "A responsive website built for a fictional restaurant.",
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
