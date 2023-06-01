import React from 'react';
import "./skills.css";

const Skills = ({ content }) => {

    const skills = content.split(", ");

    return (
        <div className='cv-skills-container'>
            {skills.map(skill => <div className='cv-skill'>{skill}</div>)}
        </div>
    )
}

export default Skills;