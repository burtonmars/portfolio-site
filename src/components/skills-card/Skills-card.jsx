import React from 'react';
import './skills-card.scss';

function SkillsCard(props) {
  const skillsList = props.skills.map((skill) =>
    <li key={skill.id}>{skill.value}</li>
  );

  return (
    <div className='skills-card-container'>
      <h2>{props.title}</h2>
      <ul>{skillsList}</ul>
    </div>
  )
}

export default SkillsCard


