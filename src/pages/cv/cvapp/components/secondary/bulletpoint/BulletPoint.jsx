import React from 'react';
import "./bulletpoint.css";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const BulletPoint = ({ content }) => <div className='cv-bullet-point'><div><VscDebugBreakpointLog className='cv-point-svg' /></div> {content}</div>;

export default BulletPoint;