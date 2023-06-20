/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import PortfolioBox from "./PortfolioBox";
import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio1Phone, portfolio2Phone, portfolio3Phone, portfolio4Phone, portfolio5Phone, portfolio6Phone } from "../../assets/Exports";
import { useTranslation } from "react-i18next";
import { mainActiveLang } from "../../languages/language/ActiveLang";

function Portfolio() {

    const { t } = useTranslation("main");

    return (
        <section className="portfolio home-section" id="portfolio">
            <h2 className="heading">{t(`${mainActiveLang()}.portfolio.latest`)} <span>{t(`${mainActiveLang()}.portfolio.projects`)}</span></h2>
            <div className="portfolio-container">
                <PortfolioBox desktopImg={portfolio1}
                    mobileImg={portfolio1Phone} githubLink="https://github.com/mostafasaleh1/mintmind"
                    liveDemoLink="https://mostafasaleh1.github.io/mintmind"
                    h4Content={t(`${mainActiveLang()}.portfolio.box1.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box1.pcontent`)}
                />
                <PortfolioBox desktopImg={portfolio2}
                    mobileImg={portfolio2Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content={t(`${mainActiveLang()}.portfolio.box2.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box2.pcontent`)}
                />
                <PortfolioBox desktopImg={portfolio3}
                    mobileImg={portfolio3Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content={t(`${mainActiveLang()}.portfolio.box3.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box3.pcontent`)}
                />
                <PortfolioBox desktopImg={portfolio4}
                    mobileImg={portfolio4Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content={t(`${mainActiveLang()}.portfolio.box4.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box4.pcontent`)}
                />
                <PortfolioBox desktopImg={portfolio5}
                    mobileImg={portfolio5Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content={t(`${mainActiveLang()}.portfolio.box5.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box5.pcontent`)}
                />
                <PortfolioBox desktopImg={portfolio6}
                    mobileImg={portfolio6Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content={t(`${mainActiveLang()}.portfolio.box6.title`)}
                    pContent={t(`${mainActiveLang()}.portfolio.box6.pcontent`)}
                />
            </div>
        </section>
    );
}
export default Portfolio;