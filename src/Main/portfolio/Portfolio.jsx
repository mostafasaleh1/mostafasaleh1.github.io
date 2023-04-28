/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import portfolio1 from "../../assets/portfolio/portfolio1.webp";
import portfolio2 from "../../assets/portfolio/portfolio2.webp";
import portfolio3 from "../../assets/portfolio/portfolio3.webp";
import portfolio4 from "../../assets/portfolio/portfolio4.webp";
import portfolio5 from "../../assets/portfolio/portfolio5.webp";
import portfolio6 from "../../assets/portfolio/portfolio6.webp";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="protfolio-container">
                <div className="portfolio-box">
                    <img src = {portfolio1} alt="the first website i've developed" />
                    <div className="portfolio-layer">
                        <div className="portfolio-layer-text-container">
                        <h4>Mint Mind Coffee company</h4>
                        <p>Mint Mind coffee company is a clone website of the Starbucks coffee company's website. I developed this website in my free time to help my Russian friend. It's a muti-page website.</p>
                        </div>
                        <div className="portfolio-links-container">
                        <a href="https://github.com/mostafasaleh1/mintmind" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bxl-github' title="View on Github"></i> Github</a>
                        <a href="https://mostafasaleh1.github.io/mintmind" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bx-broadcast' title="Open Live Demo"></i> Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio2} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <div className="portfolio-layer-text-container">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        </div>
                        <div className="portfolio-links-container">
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bxl-github' title="View on Github"></i> Github</a>
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bx-broadcast' title="Open Live Demo"></i> Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio3} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <div className="portfolio-layer-text-container">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        </div>
                        <div className="portfolio-links-container">
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bxl-github' title="View on Github"></i> Github</a>
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bx-broadcast' title="Open Live Demo"></i> Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio4} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <div className="portfolio-layer-text-container">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        </div>
                        <div className="portfolio-links-container">
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bxl-github' title="View on Github"></i> Github</a>
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bx-broadcast' title="Open Live Demo"></i> Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio5} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <div className="portfolio-layer-text-container">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        </div>
                        <div className="portfolio-links-container">
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bxl-github' title="View on Github"></i> Github</a>
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bx-broadcast' title="Open Live Demo"></i> Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio6} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <div className="portfolio-layer-text-container">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        </div>
                        <div className="portfolio-links-container">
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bxl-github' title="View on Github"></i> Github</a>
                        <a href="#" className="portfolio-layer-link btn" target="_blank" rel="noreferrer"><i className='bx bx-broadcast' title="Open Live Demo"></i> Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;