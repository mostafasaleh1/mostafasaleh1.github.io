import React from "react";
import Header from "./cvapp/components/primary/header/Header";
import MainContainer from "./cvapp/MainContainer";
import "./cv.css";

const CV = () => (
    <section className="cv">
        <h2 className="heading">My <span>Resume</span></h2>
        <div className="cv-app">
            <div className="cv-page">
                <Header />
                <MainContainer />
            </div>
        </div>
        <a href="https://raw.githubusercontent.com/mostafasaleh1/cv/main/src/assets/Mostafa%20Saleh%20CV.pdf" className="btn">Download CV</a>
    </section>
);

export default CV;
