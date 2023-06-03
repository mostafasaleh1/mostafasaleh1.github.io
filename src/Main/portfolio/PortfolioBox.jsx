import React from "react";
import "./portfolio.css";
import { BsGithub, BsBroadcastPin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { mainActiveLang } from "../../languages/language/ActiveLang";

const PortfolioBox = (props) => {

    const githubIcon = <BsGithub />;
    const liveDemoIcon = <BsBroadcastPin />;

    const { t } = useTranslation("main");

    return (
        <div className="portfolio-box">
            <img src={window.innerWidth < 993 ? props.mobileImg : props.desktopImg} alt="the first website i've developed" />
            <div className="portfolio-layer">
                <div className="portfolio-layer-text-container">
                    <h4>{props.h4Content}</h4>
                    <p>{props.pContent}</p>
                </div>
                <div className="portfolio-links-container">
                    <a href={props.githubLink} className="portfolio-layer-link btn" target="_blank" rel="noreferrer" title={t(`${mainActiveLang()}.portfolio.box1.githubtitle`)}>{githubIcon} {t(`${mainActiveLang()}.portfolio.box1.github`)}</a>
                    <a href={props.liveDemoLink} className="portfolio-layer-link btn" target="_blank" rel="noreferrer" title={t(`${mainActiveLang()}.portfolio.box1.livedemotitle`)}>{liveDemoIcon} {t(`${mainActiveLang()}.portfolio.box1.livedemo`)}</a>
                </div>
            </div>
        </div>
    );
}
export default PortfolioBox;