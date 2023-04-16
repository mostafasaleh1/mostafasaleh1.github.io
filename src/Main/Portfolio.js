/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="protfolio-container">
                <div className="portfolio-box">
                    <img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio1.jpg"} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio2.jpg"} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio3.jpg"} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio4.jpg"} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio5.jpg"} alt="portfolio1" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sequi.</p>
                        <a href="#"><i className='bx bx-link-external' title="#"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio6.jpg"} alt="portfolio1" />
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