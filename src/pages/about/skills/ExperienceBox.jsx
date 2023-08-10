import React from 'react';
import { RTL } from '../../../languages/language/RTL';

const ExperienceBox = (props) => {
    return (
        <div className={`experience-box ${RTL()}`}>
            <div className='experience-year'>
                <p>{props.year}</p>
            </div>
            <div className='experience-box-content'>
                <h3>{props.h3Content}</h3>
                <h5>{props.company}</h5>
                <p>{props.pContent}</p>
            </div>
        </div>
    )
}

export default ExperienceBox;