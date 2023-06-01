import React from 'react';
import "./dateandlocation.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Date = ({ date, location }) => (
  <div className='cv-date-and-location'>
    <div><FaCalendarAlt /> {date}</div>
    <div><IoLocationSharp /> {location}</div>
  </div>
);

export default Date;