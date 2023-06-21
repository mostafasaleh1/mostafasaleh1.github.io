import React from "react";
import Header from "./cvapp/components/primary/header/Header";
import MainContainer from "./cvapp/MainContainer";
import { cvActiveLang } from "../../languages/language/ActiveLang";
import { useTranslation } from 'react-i18next';
import Footer from "../../Main/footer/Footer";
import "./cv.css";

const CV = () => {
    const { t } = useTranslation("cv");
    return (
    <React.Fragment>
    <section className="cv">
        <h2 className="heading">{t(`${cvActiveLang()}.cv.my`)} <span>{t(`${cvActiveLang()}.cv.resume`)}</span></h2>
        <div className="cv-app">
            <div className="cv-page">
                <Header />
                <MainContainer />
            </div>
        </div>
        <a href="https://raw.githubusercontent.com/mostafasaleh1/cv/main/src/assets/Mostafa%20Saleh%20CV.pdf" className="btn" type="button" title="Download CV">{t(`${cvActiveLang()}.cv.download`)}</a>
            </section>
            <Footer />
    </React.Fragment>
    );
}

export default CV;
