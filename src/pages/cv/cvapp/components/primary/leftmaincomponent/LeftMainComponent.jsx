import React from 'react';
import "./leftmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint } from "../../secondary/Exports";

const LeftMainComponent = () => (
    <div className='cv-left'>
        {/* Experience */}

        <SectionTitle content="experience" />

        <div className='cv-content-box'>
            <JobTitle content="Freenancer" />
            <InstitutionName content="Upwork" />
            <DateAndLocation date="15 Aug 2023 - Now" location="Alexandria, Egypt" />
            <BulletPoint content="I'm currently working as a front-end developer on Upwork." />
        </div>

        <div className='cv-content-box'>
            <JobTitle content="Intern" />
            <InstitutionName content="Telecom Egypt" />
            <DateAndLocation date="3 Jul 2021 - 12 Aug 2021" location="Alexandria, Egypt" />
            <BulletPoint content="I was a trainee at Telecom Egypt Miami Exchange. I learned about: Optical fibre cables, their structure, how they're connected underground, how to splice them using (Fusion Splicing), FTTH networks, Telecom Egypt traffic devices especially PCM, WDH, SDH and WDM." />
        </div>

        {/* Projects */}

        <div className='cv-content-box'>
            <SectionTitle content="Projects" />
            <JobTitle content="Intelligent Mobile Robot" />
            <InstitutionName content="Kfs-HIET" />
            <DateAndLocation date="Jun 2022 - Jul 2023" location="Kafr Elsheikh, Egypt" />
            <BulletPoint content="This is my Graduation Project, An autonomous indoor mobile robot, named IMR, with an arm for assisting tasks, uses odometry and Kinect v2 for SLAM mapping. It operates autonomously via AMCL, supports ROS, and future work includes object detection, mapping, and gesture control." />
        </div>

        <div className='cv-content-box'>
            <JobTitle content="Pathological Phenomena of Poultry" />
            <InstitutionName content="AIOT" />
            <DateAndLocation date="3 Jul 2021 - 12 Aug 2021" location="Kafr Elsheikh, Egypt" />
            <BulletPoint content="I worked on the dataset to train a model to recognize sick broilers using deep learning and computer vision. The AI detects broilers and track them and differentiates among sick and healthy broilers." />
        </div>

        <div className='cv-content-box'>
            <JobTitle content="My Profile" />
            <InstitutionName content="Personal Project" />
            <DateAndLocation date="May 2023 - June 2023" location="Home" />
            <BulletPoint content="I developed a Profile React App which works as a personal portfolio, blog and online CV and the most difficult challenge I faced in this project is the translation feature." />
            <BulletPoint content="I used React.js, vanilla CSS and i18next which is an internationalisation library for react." />
        </div>

        <div className='cv-content-box'>
            <JobTitle content="Graduation project website" />
            <InstitutionName content="Google" />
            <DateAndLocation date="15 May 2023 - 30 May 2023" location="Home" />
            <BulletPoint content="This is a profile website for my graduation project, I developed it using React, Vite and TailwindCSS." />
        </div>
    </div>
);

export default LeftMainComponent;