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
    </section>
)

export default CV;