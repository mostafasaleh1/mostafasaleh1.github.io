/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Mostafa from "../../assets/1.webp";
import "./about.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={Mostafa} alt="about img" />
            </div>
            <main className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eveniet explicabo similique soluta illo
                    numquam suscipit veritatis, quas laudantium totam dolorum necessitatibus in quo exercitationem ullam.
                    Voluptatem consequuntur dicta sed eaque, sapiente maiores non facilis vero error, temporibus quaerat,
                    accusamus animi quidem? Cupiditate corporis ex vero.</p>
                <a href="#" className="btn">Read More</a>
            </main>
        </section>
    );
}
export default About;