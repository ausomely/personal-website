import React from 'react';
import skill_list from '../assets/skills_list';
import SkillElement from './skill_element';


export default function Skills() {
    return(
        <div className='user-select-none' id='skills-container-wrapper'>
            <div id='skills-container'>
                <div id='skills-header' data-aos='fade-right' data-aos-duration='1300' data-aos-once='true'>Skill Set</div>
                <div id='skills-map' data-aos='fade-right' data-aos-duration='1300' data-aos-delay='1000' data-aos-once='true'>
                    {
                        skill_list.map((skill, index) => {
                            return <SkillElement key={index} icon={skill_list[index].icon} name={skill.name}/>;
                        })
                    }
                </div>
            </div>
        </div>
    );
}