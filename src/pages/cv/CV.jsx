import React from "react";
import "./cv.css";

const CV = () => (
    <section className="cv">
        <h2 className="heading">My <span>Resume</span></h2>
        <iframe
            src="https://onedrive.live.com/embed?cid=317E50C5E6FB11CA&resid=317E50C5E6FB11CA%21320&authkey=ABB2T61sbKsJdGY&em=2"
            frameborder="0"
            className="cv-iframe"
            title="CV"
            allowFullScreen
            scrolling="no"
        ></iframe>
    </section>
)

export default CV;