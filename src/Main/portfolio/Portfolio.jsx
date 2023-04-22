/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import portfolio1 from "../../assets/portfolio/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio/portfolio5.jpg";
import portfolio6 from "../../assets/portfolio/portfolio6.jpg";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="protfolio-container">
                <div className="portfolio-box">
                    <img src = {portfolio1} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio2} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio3} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio4} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio5} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={portfolio6} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;