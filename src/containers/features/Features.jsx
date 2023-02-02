import React from 'react';
import { ProjectCard } from '../../components';
import './features.scss';

const projectCardData = [
  {
    title: 'Improve usability and design',
    text: 'I can help you design websites and apps that are easy to use and beautiful'
  },
    {
    title: 'Brand awareness',
    text: 'I can help your business grow and become what you have always wanted'
  },
    {
    title: 'simple and easy to use',
    text: 'I can help you design websites and apps that are easy to use and beautiful'
  }
]


const Features = () => {
  return (
    <div className='portfolio__features-container'>
      {projectCardData.map((item, index) => (
        <ProjectCard title={item.title} text={item.text} key={item.title + index}/>
      ))}
    </div>
  )
};

export default Features;
