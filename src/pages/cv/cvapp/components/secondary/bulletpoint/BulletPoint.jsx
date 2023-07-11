import React from 'react';
import "./bulletpoint.css";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const BulletPoint = ({ content, course, type }) => {
    if (course === "true") {
        return <div className="cv-bullet-point cv-course"><div><VscDebugBreakpointLog className='cv-point-svg' /></div> <span>{content} <span className='cv-course-type'> {type}</span></span></div>
    }
    else {
        return <div className="cv-bullet-point"><div><VscDebugBreakpointLog className='cv-point-svg' /></div> <span>{content} <span className='cv-course-type'> {type}</span></span></div>
    }
};

export default BulletPoint;