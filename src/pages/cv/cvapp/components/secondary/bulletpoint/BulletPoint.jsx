import React from 'react';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import "./bulletpoint.css";

const BulletPoint = ({ content, course, courseType, containsLink, link }) => {
    if (containsLink === true) {
        if (course === true) {
            return <div className="cv-bullet-point cv-course"><div><VscDebugBreakpointLog className='cv-point-svg' /></div><Link className='cv-bullet-points-inner-link' to={link}> <span>{content} </span><span className='cv-course-type'> {courseType}</span></Link></div>
        }
        else {
            return <div className="cv-bullet-point"><div><VscDebugBreakpointLog className='cv-point-svg' /></div><Link className='cv-bullet-points-inner-link' to={link}> <span>{content} </span><span className='cv-course-type'> {courseType}</span></Link></div>
        }
    }
    else {
        if (course === true) {
            return <div className="cv-bullet-point cv-course"><div><VscDebugBreakpointLog className='cv-point-svg' /></div> <span>{content} <span className='cv-course-type'> {courseType}</span></span></div>
        }
        else {
            return <div className="cv-bullet-point"><div><VscDebugBreakpointLog className='cv-point-svg' /></div> <span>{content} <span className='cv-course-type'> {courseType}</span></span></div>
        }
    }
};

export default BulletPoint;