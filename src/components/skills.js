import React from 'react';
import skill_list from '../assets/skills_list';
import SkillElement from './skill_element';


export default function Skills() {
    return(
        <div id='skills-container-wrapper'>
            <div id='skills-container'>
                <div id='skills-header'>Skills</div>
                <div id='skills-map'>
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