import React from "react";
import "./portfolio.css";
import { BsGithub, BsBroadcastPin } from "react-icons/bs";

const PortfolioBox = (props) => {

    const githubIcon = <BsGithub />;
    const liveDemoIcon = <BsBroadcastPin />;

    return (
        <div className="portfolio-box">
            <img src={window.innerWidth < 993 ? props.mobileImg : props.desktopImg} alt="the first website i've developed" />
            <div className="portfolio-layer">
                <div className="portfolio-layer-text-container">
                    <h4>{props.h4Content}</h4>
                    <p>{props.pContent}</p>
                </div>
                <div className="portfolio-links-container">
                    <a href={props.githubLink} className="portfolio-layer-link btn" target="_blank" rel="noreferrer" title="View on Github">{githubIcon} Github</a>
                    <a href={props.liveDemoLink} className="portfolio-layer-link btn" target="_blank" rel="noreferrer" title="Open Live Demo">{liveDemoIcon} Live Demo</a>
                </div>
            </div>
        </div>
    );
}
export default PortfolioBox;