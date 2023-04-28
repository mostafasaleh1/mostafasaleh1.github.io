/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./services.css";
import { BiLineChart, BiPaint, BiCodeAlt } from "react-icons/bi";

function Services() {
    return (
        <section className="services" id="services">
            <h2 className="heading">Our <span>Services</span></h2>
            <div className="services-container">
                <div className="services-box">
                    <BiCodeAlt />
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veritatis dignissimos fugit
                        laudantium? Porro nemo eaque ad accusantium voluptatum quos velit, quia odio sed necessitatibus!</p>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <BiPaint />
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veritatis dignissimos fugit
                        laudantium? Porro nemo eaque ad accusantium voluptatum quos velit, quia odio sed necessitatibus!</p>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <BiLineChart />
                    <h3>Digital Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veritatis dignissimos fugit
                        laudantium? Porro nemo eaque ad accusantium voluptatum quos velit, quia odio sed necessitatibus!</p>
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    );
}
export default Services;