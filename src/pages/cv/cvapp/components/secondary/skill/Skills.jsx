import React from 'react';
import "./skills.css";

const Skills = (props) => {
    return (
        <div className='cv-skills-container'>
            {props.children}
        </div>
    )
}

export default Skills;