import React from 'react';
import "./rightmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint, Skills } from '../../secondary/Exports';

const RightMainComponent = () => (
    <div className='right'>
        <SectionTitle content="Education" />
        <div className='cv-content-box'>
            <InstitutionName content="Higher Institute of Engineering and Technology of Kafr ELsheikh" />
            <DateAndLocation date="Sep 2018 - Jul 2023" location="Kafr Elsheikh" />
            <BulletPoint content="Bachelor of Engineering in Electrical Engineering - Computer and Control Department." />
            <BulletPoint content="Grade: Very Good." />
            <BulletPoint content="Project Title: Intelligent Mobile Robot (IMR)." />
            <BulletPoint content="Project Grade: Excellent." />
        </div>

        <div className='cv-content-box'>
            <SectionTitle content="Skills" />
            <Skills content="React, HTML, CSS, Javascript, Redux, tailwindcss, CCNA, C, C++, C#, Git, Github" />
            <Skills content="Problem-solving, Working under pressure, Teamwork, Communication, Leadership, Adaptablility" />
        </div>

        <div className='cv-content-box'>
            <SectionTitle content="Courses" />
            <BulletPoint content="Front End Web Development Professional Nanodegree" course="true" type="(Udacity Scholarship)" />
            <BulletPoint content="CCNA 200-301" course="true" type="(self-learning)" />
            <BulletPoint content="Fundamentals of Operating Systems" course="true" type="(self-learning)" />
            <BulletPoint content="Artificial Neural Networks" course="true" type="(Course)" />
            <BulletPoint content="Introduction to Computer Architecture using RISC-V" course="true" type="(Course)" />
        </div>

        <div className='cv-content-box'>
            <SectionTitle content="Languages" />
            <BulletPoint content="Arabic" course="true" type="(Native)" />
            <BulletPoint content="English" course="true" type="(Fluent)" />
            <BulletPoint content="Russian" course="true" type="(Beginner)" />
        </div>
    </div>
);

export default RightMainComponent;