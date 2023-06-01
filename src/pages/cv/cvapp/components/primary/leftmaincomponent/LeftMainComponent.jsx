import React from 'react';
import "./leftmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint } from "../../secondary/Exports";

const LeftMainComponent = () => (
    <div className='cv-left'>
        <SectionTitle content="experience" />
        <div className='cv-content-box'>
            <JobTitle content="React Developer" />
            <InstitutionName content="Google" />
            <DateAndLocation date="30/5" location="Location1" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>

        <div className='cv-content-box'>
            <SectionTitle content="projects" />
            <JobTitle content="React Developer" />
            <InstitutionName content="Google" />
            <DateAndLocation date="30/5" location="Location1" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>

        <div className='cv-content-box'>
            <JobTitle content="React Developer" />
            <InstitutionName content="Google" />
            <DateAndLocation date="30/5" location="Location1" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah sjkadfhsdfaf asdfj hsadf" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>

        <div className='cv-content-box'>
            <JobTitle content="React Developer" />
            <InstitutionName content="Google" />
            <DateAndLocation date="30/5" location="Location1" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>

        <div className='cv-content-box'>
            <JobTitle content="React Developer" />
            <InstitutionName content="Google" />
            <DateAndLocation date="30/5" location="Location1" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>

        <div className='cv-content-box'>
            <JobTitle content="React Developer" />
            <InstitutionName content="Google" />
            <DateAndLocation date="30/5" location="Location1" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>
    </div>
);

export default LeftMainComponent;