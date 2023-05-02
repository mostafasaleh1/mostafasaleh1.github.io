/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import PortfolioBox from "./PortfolioBox";
import portfolio1 from "../../assets/portfolio/portfolio1.webp";
import portfolio2 from "../../assets/portfolio/portfolio2.webp";
import portfolio3 from "../../assets/portfolio/portfolio3.webp";
import portfolio4 from "../../assets/portfolio/portfolio4.webp";
import portfolio5 from "../../assets/portfolio/portfolio5.webp";
import portfolio6 from "../../assets/portfolio/portfolio6.webp";
import portfolio1Phone from "../../assets/portfolio/portfolio1Phone.webp";
import portfolio2Phone from "../../assets/portfolio/portfolio2Phone.webp";
import portfolio3Phone from "../../assets/portfolio/portfolio3Phone.webp";
import portfolio4Phone from "../../assets/portfolio/portfolio4Phone.webp";
import portfolio5Phone from "../../assets/portfolio/portfolio5Phone.webp";
import portfolio6Phone from "../../assets/portfolio/portfolio6Phone.webp";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="protfolio-container">
                <PortfolioBox desktopImg={portfolio1}
                    mobileImg={portfolio1Phone} githubLink="https://github.com/mostafasaleh1/mintmind"
                    liveDemoLink="https://mostafasaleh1.github.io/mintmind"
                    h4Content="Mint Mind Coffee company"
                    pContent="Mint Mind coffee company is a clone website of the Starbucks coffee company's website"
                />
                <PortfolioBox desktopImg={portfolio2}
                    mobileImg={portfolio2Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Web Design"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
                <PortfolioBox desktopImg={portfolio3}
                    mobileImg={portfolio3Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Web Design"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
                <PortfolioBox desktopImg={portfolio4}
                    mobileImg={portfolio4Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Web Design"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
                <PortfolioBox desktopImg={portfolio5}
                    mobileImg={portfolio5Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Web Design"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
                <PortfolioBox desktopImg={portfolio6}
                    mobileImg={portfolio6Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Web Design"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
            </div>
        </section>
    );
}
export default Portfolio;