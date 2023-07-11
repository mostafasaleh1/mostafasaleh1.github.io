import React from "react";
import { BsGithub, BsBroadcastPin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { projectsActiveLang } from "../../languages/language/ActiveLang";
import "./projects.css";

const ProjectsBox = (props) => {

    const githubIcon = <BsGithub />;
    const liveDemoIcon = <BsBroadcastPin />;

    const { t } = useTranslation("projects");

    const hideLiveDemoButton = () => {
        return props.hideLiveDemo ? "none" : "flex";
    }

    return (
        <div className="projects-box">
            <div className="projects-image-container">
                <img src={window.innerWidth < 993 ? props.mobileImg : props.desktopImg} alt="img" />
            </div>
            <div className="projects-layer">
                <div className="projects-layer-text-container">
                    <h4>{props.h4Content}</h4>
                    <p>{props.pContent}</p>
                </div>
                <div className="projects-links-container">
                    <a href={props.githubLink} className="projects-layer-link btn" target="_blank" rel="noreferrer" title={t(`${projectsActiveLang()}.frontend.project1.githubtitle`)}>{githubIcon} {t(`${projectsActiveLang()}.frontend.project1.github`)}</a>
                    <a href={props.liveDemoLink} className="projects-layer-link btn" target="_blank" rel="noreferrer" title={t(`${projectsActiveLang()}.frontend.project1.livedemotitle`)} style={{display: hideLiveDemoButton()}}>{liveDemoIcon} {t(`${projectsActiveLang()}.frontend.project1.livedemo`)}</a>
                </div>
            </div>
        </div>
    );
}
export default ProjectsBox;