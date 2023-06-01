import React from 'react';
import "./rightmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint, Skills } from '../../secondary/Exports';

const RightMainComponent = () => (
    <div className='right'>
        <SectionTitle content="Education" />
        <div className='cv-content-box'>
            <JobTitle content="Software Develper" />
            <InstitutionName content="Higher Institute of Engineering and Technology - Kafr ELsheikh" />
            <DateAndLocation date="Sep 2018 - Jul 2023" location="Kafr Elsheikh" />
            <BulletPoint content="Bachelor of Engineering - Computer and Control Engineering" />
        </div>

        <div className='cv-content-box'>
            <SectionTitle content="Skills" />
            <Skills content="React, HTML, CSS, Javascript, Redux, CCNA" />
        </div>

        <div className='cv-content-box'>
            <SectionTitle content="Courses" />
            <BulletPoint content="Front End Web Development Professional Nanodegree" />
            <BulletPoint content="Introduction to Git and GitHub" />
        </div>
    </div>
);

export default RightMainComponent;