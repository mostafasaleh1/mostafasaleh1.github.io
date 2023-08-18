import React from 'react';
import "./rightmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint, Skill, Skills } from '../../secondary/Exports';

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
            <Skills>
                <Skill content="React" containsLink={false} link="#" />
                <Skill content="HTML" containsLink={false} link="#" />
                <Skill content="CSS" containsLink={false} link="#" />
                <Skill content="Javascript" containsLink={false} link="#" />
                <Skill content="Redux" containsLink={false} link="#" />
                <Skill content="tailwindcss" containsLink={false} link="#" />
                <Skill content="i18next" containsLink={false} link="#" />
                <Skill content="Sass" containsLink={false} link="#" />
                <Skill content="CCNA" containsLink={false} link="#" />
                <Skill content="C" containsLink={false} link="#" />
                <Skill content="C++" containsLink={false} link="#" />
                <Skill content="C#" containsLink={false} link="#" />
                <Skill content="Git" containsLink={false} link="#" />
                <Skill content="Github" containsLink={false} link="#" />
            </Skills>
            <Skills>
                <Skill content="Problem-solving" containsLink={false} link="#" />
                <Skill content="Working under pressure" containsLink={false} link="#" />
                <Skill content="Teamwork" containsLink={false} link="#" />
                <Skill content="Communication" containsLink={false} link="#" />
                <Skill content="Leadership" containsLink={false} link="#" />
                <Skill content="Adaptablility" containsLink={false} link="#" />
                <Skill content="Fast Typing 62 WPM" containsLink={true} link="#" />
            </Skills>
        </div>

        {/* Courses */}

        <div className='cv-content-box'>
            <SectionTitle content="Courses" />
            <BulletPoint content="Front End Web Development Professional Nanodegree" course={true} courseType="(Udacity Scholarship)" containsLink={true} link="#" />
            <BulletPoint content="CCNA 200-301" course={true} courseType="(SNL Remote Course)" containsLink={true} link="#" />
            <BulletPoint content="Widnows Server Adminstration" course={true} courseType="(Udemy)" containsLink={true} link="#" />
            <BulletPoint content="Advanced ReactJS" course={true} courseType="(Coursera)" containsLink={true} link="#" />
            <BulletPoint content="NodeJS" course={true} courseType="(Udemy)" containsLink={true} link="#" />
            <BulletPoint content="Fundamentals of Operating Systems" course={true} courseType="(self-learning)" containsLink={true} link="#" />
            <BulletPoint content="Artificial Neural Networks" course={true} courseType="(HIET)" containsLink={true} link="#" />
            <BulletPoint content="Introduction to Computer Architecture using RISC-V" course={true} courseType="(self-learning)" containsLink={true} link="#" />
        </div>

        {/* Languages */}

        <div className='cv-content-box'>
            <SectionTitle content="Languages" />
            <BulletPoint content="Arabic" course={true} courseType="(Native)" containsLink={false} link="#" />
            <BulletPoint content="English" course={true} courseType="(Fluent)" containsLink={false} link="#" />
            <BulletPoint content="Russian" course={true} courseType="(Beginner)" containsLink={false} link="#" />
            <BulletPoint content="German" course={true} courseType="(Beginner)" containsLink={false} link="#" />
        </div>
    </div>
);

export default RightMainComponent;