/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import PortfolioBox from "./PortfolioBox";
import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio1Phone, portfolio2Phone, portfolio3Phone, portfolio4Phone, portfolio5Phone, portfolio6Phone } from "../../assets/Exports";

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
                    h4Content="Coming Soon"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
                <PortfolioBox desktopImg={portfolio3}
                    mobileImg={portfolio3Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Coming Soon"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
                <PortfolioBox desktopImg={portfolio4}
                    mobileImg={portfolio4Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Coming Soon"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
                <PortfolioBox desktopImg={portfolio5}
                    mobileImg={portfolio5Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Coming Soon"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
                <PortfolioBox desktopImg={portfolio6}
                    mobileImg={portfolio6Phone}
                    githubLink="#"
                    liveDemoLink="#"
                    h4Content="Coming Soon"
                    pContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi."
                />
            </div>
        </section>
    );
}
export default Portfolio;