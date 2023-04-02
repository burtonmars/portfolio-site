import React from 'react';
import { SkillsCard } from '../../components';
import './skills.scss';

const frontEndProps = {
  title: "Front-End Experience",
  experience: [
    { id: 0,
      value: "Typescript" },
    { id: 1,
      value: "Angular"
    }, 
    { id: 2,
      value: "React"
    }, 
    { id: 3,
      value: "Tailwind"
    }, 
    { id: 4,
      value: "HTML"
    }, 
    { id: 5,
      value: "CSS"
    }]
}

const backEndProps = {
  title: "Back-End Experience",
  experience: [
    { id: 0,
      value: "Javascript"
    },
    { id: 1,
      value: "Node.JS"
    },
    { id: 2,
      value: "Express"
    },
    { id: 3,
      value:  "REST APIs"
    },
    { id: 4,
      value: "SQL"
    },
    { id: 5,
      value: "SSMS"
    }
  ]
}

const showFrontendSkills = true;
const showBackendSkills = true;

const Skills = () => {
  return (
    <div id="skills" className='skills-container h-screen'>
      <div className="right-container">
        <div className="front-end-skills">
          { showFrontendSkills &&
            <SkillsCard 
              title={frontEndProps.title}
              skills={frontEndProps.experience}
            />
          }
        </div>
      </div>
      <div className="left-container">
        <div className="back-end-skills">
          { showBackendSkills &&
            <SkillsCard
              title={backEndProps.title}
              skills={backEndProps.experience}
            />
          }
        </div>
      </div>
    </div>
  )
};

export default Skills;
