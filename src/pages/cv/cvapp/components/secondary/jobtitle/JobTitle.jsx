import React from 'react';
import "./jobtitle.css";

const JobTitle = ({ content }) => (
    <span className="cv-job-title">
        {content}
    </span>
);
export default JobTitle;