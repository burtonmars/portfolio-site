import React from 'react';
import { SkillsCard } from '../../components';
import './skills.scss';
import monitorImg from '../../assets/img/S5_Monitor.webp';
import serverImg from '../../assets/img/S5_Server.webp';

const frontEndProps = {
  title: "Front-End Experience",
  img: monitorImg,
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
      value: "Kendo"
    }, 
    { id: 5,
      value: "HTML5/CSS3"
    }]
}

const backEndProps = {
  title: "Back-End Experience",
  img: serverImg,
  experience: [
    { id: 0,
      value: "Javascript ES6"
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
        <div className="right-container-text">
          <div className="front-end-skills">
            { showFrontendSkills &&
              <SkillsCard 
                title={frontEndProps.title}
                skills={frontEndProps.experience}
                img={frontEndProps.img}
              />
            }
          </div>
        </div>
      </div>
      <div className="left-container">
        <div className="left-container-text">
          <div className="back-end-skills">
            { showBackendSkills &&
              <SkillsCard
                title={backEndProps.title}
                skills={backEndProps.experience}
                img={backEndProps.img}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;
