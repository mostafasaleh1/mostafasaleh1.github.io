/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./services.css";
import { BiLineChart, BiPaint, BiCodeAlt } from "react-icons/bi";
import ServiceBox from "./ServiceBox";

function Services() {
    return (
        <section className="services" id="services">
            <h2 className="heading">Our <span>Services</span></h2>
            <div className="services-container">
                <ServiceBox logo={<BiCodeAlt />}
                    h3Content="Web Development"
                    pContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veritatis dignissimos fugit
                    laudantium? Porro nemo eaque ad accusantium voluptatum quos velit, quia odio sed necessitatibus!"
                    readMoreLink="#"
                />

                <ServiceBox logo={<BiPaint />}
                    h3Content="Graphic Design"
                    pContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veritatis dignissimos fugit
                    laudantium? Porro nemo eaque ad accusantium voluptatum quos velit, quia odio sed necessitatibus!"
                    readMoreLink="#"
                />

                <ServiceBox logo={<BiLineChart />}
                    h3Content="Digital Marketing"
                    pContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veritatis dignissimos fugit
                    laudantium? Porro nemo eaque ad accusantium voluptatum quos velit, quia odio sed necessitatibus!"
                    readMoreLink="#"
                />
            </div>
        </section>
    );
}
export default Services;