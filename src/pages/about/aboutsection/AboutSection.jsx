/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Mostafa from "../../../assets/600x600.webp";
import { useTranslation } from 'react-i18next';
import { mainActiveLang } from '../../../languages/language/ActiveLang';
import { RTL } from "../../../languages/language/RTL";

import "./aboutsection.css";


function About() {
    const { t } = useTranslation("main");
    return (
        <section className={`about ${RTL()} home-section`} id="about">
            <div className="about-img">
                <img src={Mostafa} alt={t(`${mainActiveLang()}.home.myname`)} title={t(`${mainActiveLang()}.home.myname`)} />
            </div>
            <main className="about-content">
                <h2 className={`heading ${window.innerWidth > 768 ? RTL() : ""}`}>
                    {t(`${mainActiveLang()}.about.about`)} <span>{t(`${mainActiveLang()}.about.me`)}</span>
                </h2>
                <h3>
                    {t(`${mainActiveLang()}.about.job`)}
                </h3>
                <p>
                    {t(`${mainActiveLang()}.about.pcontent`)}
                </p>
            </main>
        </section>
    );
}
export default About;