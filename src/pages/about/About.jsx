import React from 'react';
import AboutSection from "./aboutsection/AboutSection";
import Skills from "./skills/Skills";
import Header from './header/Header';
import Footer from './../../Main/footer/Footer';
import "./about.css";

const About = () => {
    return (
        <React.Fragment>
            <Header />
            <AboutSection />
            {/*<Skills />*/}
            <Footer colour="footer-light" />
        </React.Fragment>
    )
}

export default About;