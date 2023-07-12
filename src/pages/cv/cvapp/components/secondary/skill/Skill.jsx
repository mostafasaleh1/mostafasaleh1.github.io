import React from 'react';
import { Link } from 'react-router-dom';
import "./skill.css";

const Skill = ({ content, containsLink, link }) => {
    if (containsLink === true) {
        return (
            <Link className='cv-skills-inner-link' to={link}>
                <div className='cv-skill'>{content}</div>
            </Link>
        )
    }
    else {
        return <div className='cv-skill'>{content}</div>
    }
}

export default Skill;