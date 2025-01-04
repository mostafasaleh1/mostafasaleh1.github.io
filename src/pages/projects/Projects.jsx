import React from 'react';
import ProjectsBox from './ProjectsBox';
import { mintmind, IMR, CV, myprofile, vigenere, caesar, mintmindPhone, IMRPhone, CVPhone, weatherJournal, graduationProject, myprofilePhone, vigenerePhone, caesarPhone, weatherJournalPhone, plurality, cash, readability, pluralityPhone, cashPhone, readabilityPhone, graduationProjectPhone, lec10assignment, lec10assignmentPhone, thetubefather, thetubefatherPhone } from "./assets/Exports";
import { useTranslation } from "react-i18next";
import { projectsActiveLang } from '../../languages/language/ActiveLang';
import Footer from './../../Main/footer/Footer';
import "./projects.css";


const Projects = () => {
    const { t } = useTranslation("projects");
    return (
        <React.Fragment>

            <section className="projects-section">
                {/* NETWORK PROJECTS */}
                <h2 className="heading">{t(`${projectsActiveLang()}.networkprojects.network`)} <span>{t(`${projectsActiveLang()}.networkprojects.projects`)}</span></h2>
                <div className="projects-container">

                    <ProjectsBox desktopImg={graduationProject}
                        mobileImg={graduationProjectPhone}
                        githubLink="https://github.com/mostafasaleh1/Intelligent-Mobile-Robot-IMR"
                        liveDemoLink="https://mostafasaleh1.github.io/graduation-project-website"
                        h4Content={t(`${projectsActiveLang()}.networkprojects.graduationProject.title`)}
                        pContent={t(`${projectsActiveLang()}.networkprojects.graduationProject.pcontent`)}
                    />

                    <ProjectsBox desktopImg={lec10assignment}
                        mobileImg={lec10assignmentPhone}
                        githubLink="https://github.com/mostafasaleh1/CCNA-course-projects-file"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.networkprojects.project1.title`)}
                        pContent={t(`${projectsActiveLang()}.networkprojects.project1.pcontent`)}
                    />

                    <ProjectsBox desktopImg={thetubefather}
                        mobileImg={thetubefatherPhone}
                        githubLink="https://github.com/mostafasaleh1/thetubefather"
                        liveDemoLink="https://mostafasaleh1.github.io/thetubefather"
                        hideLiveDemo={false}
                        h4Content={t(`${projectsActiveLang()}.programming.project11.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project11.pcontent`)}
                    />

                    <ProjectsBox desktopImg={myprofile}
                        mobileImg={myprofilePhone}
                        githubLink="https://github.com/mostafasaleh1/"
                        liveDemoLink="https://mostafasaleh1.github.io/"
                        h4Content={t(`${projectsActiveLang()}.programming.project4.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project4.pcontent`)}
                    />

                    <ProjectsBox desktopImg={IMR}
                        mobileImg={IMRPhone}
                        githubLink="https://github.com/0xdigimon/Intelligent-Mobile-Robot-IMR"
                        liveDemoLink="https://mostafasaleh1.github.io/graduation-project-website/"
                        h4Content={t(`${projectsActiveLang()}.programming.project2.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project2.pcontent`)}
                    />

                    <ProjectsBox desktopImg={weatherJournal}
                        mobileImg={weatherJournalPhone}
                        githubLink="https://github.com/mostafasaleh1/weather-journal-app"
                        liveDemoLink="https://mostafasaleh1.github.io/weather-journal-app"
                        h4Content={t(`${projectsActiveLang()}.programming.project7.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project7.pcontent`)}
                    />

                    <ProjectsBox desktopImg={mintmind}
                        mobileImg={mintmindPhone}
                        githubLink="https://github.com/mostafasaleh1/mintmind"
                        liveDemoLink="https://mostafasaleh1.github.io/mintmind"
                        h4Content={t(`${projectsActiveLang()}.programming.project1.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project1.pcontent`)}
                    />

                    <ProjectsBox desktopImg={CV}
                        mobileImg={CVPhone}
                        githubLink="https://github.com/mostafasaleh1/cv"
                        liveDemoLink="https://mostafasaleh1.github.io/cv"
                        h4Content={t(`${projectsActiveLang()}.programming.project3.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project3.pcontent`)}
                    />

                    <ProjectsBox desktopImg={vigenere}
                        mobileImg={vigenerePhone}
                        githubLink="https://github.com/mostafasaleh1/Vigenere-Cipher"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project5.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project5.pcontent`)}
                    />

                    <ProjectsBox desktopImg={caesar}
                        mobileImg={caesarPhone}
                        githubLink="https://github.com/mostafasaleh1/Caesar"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project6.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project6.pcontent`)}
                    />

                    <ProjectsBox desktopImg={plurality}
                        mobileImg={pluralityPhone}
                        githubLink="https://github.com/mostafasaleh1/Learning/tree/main/cs50%20assignments/Plurality-cs50-main"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project8.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project8.pcontent`)}
                    />

                    <ProjectsBox desktopImg={readability}
                        mobileImg={readabilityPhone}
                        githubLink="https://github.com/mostafasaleh1/Learning/tree/main/cs50%20assignments/redability-cs50-main"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project9.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project9.pcontent`)}
                    />

                    <ProjectsBox desktopImg={cash}
                        mobileImg={cashPhone}
                        githubLink="https://github.com/mostafasaleh1/Learning/tree/main/cs50%20assignments/cash-cs50-main"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project10.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project10.pcontent`)}
                    />
                    {/* <ProjectsBox desktopImg={project4}
                        mobileImg={project4Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.networkprojects.project2.title`)}
                        pContent={t(`${projectsActiveLang()}.networkprojects.project2.pcontent`)}
                    />

                    <ProjectsBox desktopImg={project4}
                        mobileImg={project4Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.networkprojects.project3.title`)}
                        pContent={t(`${projectsActiveLang()}.networkprojects.project3.pcontent`)}
                    />

                    <ProjectsBox desktopImg={project4}
                        mobileImg={project4Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.networkprojects.project4.title`)}
                        pContent={t(`${projectsActiveLang()}.networkprojects.project4.pcontent`)}
                    />

                    <ProjectsBox desktopImg={project5}
                        mobileImg={project5Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.networkprojects.project5.title`)}
                        pContent={t(`${projectsActiveLang()}.networkprojects.project5.pcontent`)}
                    />

                    <ProjectsBox desktopImg={project6}
                        mobileImg={project6Phone}
                        githubLink="#"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.networkprojects.project6.title`)}
                        pContent={t(`${projectsActiveLang()}.networkprojects.project6.pcontent`)}
                    /> */}
                </div>
            </section>

            {/* Programming Projects */}
            {/*<section>
                <h2 className="heading">{t(`${projectsActiveLang()}.programming.programming`)} <span>{t(`${projectsActiveLang()}.programming.projects`)}</span></h2>
                <div className="projects-container">
                    <ProjectsBox desktopImg={myprofile}
                        mobileImg={myprofilePhone}
                        githubLink="https://github.com/mostafasaleh1/"
                        liveDemoLink="https://mostafasaleh1.github.io/"
                        h4Content={t(`${projectsActiveLang()}.programming.project4.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project4.pcontent`)}
                    />

                    <ProjectsBox desktopImg={IMR}
                        mobileImg={IMRPhone}
                        githubLink="https://github.com/0xdigimon/Intelligent-Mobile-Robot-IMR"
                        liveDemoLink="https://mostafasaleh1.github.io/graduation-project-website/"
                        h4Content={t(`${projectsActiveLang()}.programming.project2.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project2.pcontent`)}
                    />

                    <ProjectsBox desktopImg={mintmind}
                        mobileImg={mintmindPhone}
                        githubLink="https://github.com/mostafasaleh1/mintmind"
                        liveDemoLink="https://mostafasaleh1.github.io/mintmind"
                        h4Content={t(`${projectsActiveLang()}.programming.project1.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project1.pcontent`)}
                    />

                    <ProjectsBox desktopImg={CV}
                        mobileImg={CVPhone}
                        githubLink="https://github.com/mostafasaleh1/cv"
                        liveDemoLink="https://mostafasaleh1.github.io/cv"
                        h4Content={t(`${projectsActiveLang()}.programming.project3.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project3.pcontent`)}
                    />

                    <ProjectsBox desktopImg={weatherJournal}
                        mobileImg={weatherJournalPhone}
                        githubLink="https://github.com/mostafasaleh1/weather-journal-app"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project7.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project7.pcontent`)}
                    />

                    <ProjectsBox desktopImg={vigenere}
                        mobileImg={vigenerePhone}
                        githubLink="https://github.com/mostafasaleh1/Vigenere-Cipher"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project5.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project5.pcontent`)}
                    />

                    <ProjectsBox desktopImg={caesar}
                        mobileImg={caesarPhone}
                        githubLink="https://github.com/mostafasaleh1/Caesar"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project6.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project6.pcontent`)}
                    />

                    <ProjectsBox desktopImg={plurality}
                        mobileImg={pluralityPhone}
                        githubLink="https://github.com/mostafasaleh1/Learning/tree/main/cs50%20assignments/Plurality-cs50-main"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project8.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project8.pcontent`)}
                    />

                    <ProjectsBox desktopImg={readability}
                        mobileImg={readabilityPhone}
                        githubLink="https://github.com/mostafasaleh1/Learning/tree/main/cs50%20assignments/redability-cs50-main"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project9.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project9.pcontent`)}
                    />

                    <ProjectsBox desktopImg={cash}
                        mobileImg={cashPhone}
                        githubLink="https://github.com/mostafasaleh1/Learning/tree/main/cs50%20assignments/cash-cs50-main"
                        liveDemoLink="#"
                        hideLiveDemo={true}
                        h4Content={t(`${projectsActiveLang()}.programming.project10.title`)}
                        pContent={t(`${projectsActiveLang()}.programming.project10.pcontent`)}
                    />
                </div>
            </section>*/}

            <Footer colour="footer-dark" />
        </React.Fragment>
    )
}

export default Projects;