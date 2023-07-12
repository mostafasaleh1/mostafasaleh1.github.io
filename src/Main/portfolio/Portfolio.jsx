/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import PortfolioBox from "./PortfolioBox";
import { IMR, mintmind, CV, lec10assignment, myprofile, portfolio6, IMRPhone, mintmindPhone, CVPhone, lec10assignmentPhone, myprofilePhone, portfolio6Phone } from "../../assets/Exports";
import { useTranslation } from "react-i18next";
import { mainActiveLang } from "../../languages/language/ActiveLang";

function Portfolio() {

    const { t } = useTranslation("main");

    return (
        <section className="portfolio home-section" id="portfolio">
            <h2 className="heading">{t(`${mainActiveLang()}.portfolio.latest`)} <span>{t(`${mainActiveLang()}.portfolio.projects`)}</span></h2>
            <div className="portfolio-container">
                <PortfolioBox desktopImg={myprofile}
                    mobileImg={myprofilePhone}
                    githubLink="https://mostafasaleh1.github.io/myprofile/"
                    liveDemoLink="#home"
                    h4Content={t(`${mainActiveLang()}.portfolio.box5.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box5.pcontent`)}
                />

                <PortfolioBox desktopImg={IMR}
                    mobileImg={IMRPhone}
                    githubLink="https://github.com/0xdigimon/Intelligent-Mobile-Robot-IMR"
                    liveDemoLink="https://mostafasaleh1.github.io/graduation-project-website/"
                    h4Content={t(`${mainActiveLang()}.portfolio.box1.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box1.pcontent`)}
                />

                <PortfolioBox desktopImg={mintmind}
                    mobileImg={mintmindPhone}
                    githubLink="https://github.com/mostafasaleh1/mintmind"
                    liveDemoLink="https://mostafasaleh1.github.io/mintmind"
                    h4Content={t(`${mainActiveLang()}.portfolio.box2.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box2.pcontent`)}
                />

                <PortfolioBox desktopImg={CV}
                    mobileImg={CVPhone}
                    githubLink="https://github.com/mostafasaleh1/cv"
                    liveDemoLink="https://mostafasaleh1.github.io/cv"
                    h4Content={t(`${mainActiveLang()}.portfolio.box3.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box3.pcontent`)}
                />

                <PortfolioBox desktopImg={lec10assignment}
                    mobileImg={lec10assignmentPhone} githubLink="#"
                    liveDemoLink="#"
                    hideLiveDemo={true}
                    h4Content={t(`${mainActiveLang()}.portfolio.box4.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box4.pcontent`)}
                />

                {/* <PortfolioBox desktopImg={portfolio6}
                    mobileImg={portfolio6Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content={t(`${mainActiveLang()}.portfolio.box6.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box6.pcontent`)}
                /> */}
            </div>
        </section>
    );
}
export default Portfolio;