import React from "react";
import TypedSpan from "./Typed";
import Mostafa from "../../assets/1.webp";
import "./home.css";
import { socialMediaData } from "../Data";

function Home() {
    return (
        <section className="home" id="home">
            <main className="home-content">
                <h3>Hello, It's me</h3>
                <h1><strong>Mostafa Saleh</strong></h1>
                <h3>And I'm a <TypedSpan /></h3>
                <p>I'm a software developer who is passionate about creating technology to elevate people and help new
                    developers to find the right path. Some technologies I enjoy working with include Javascript, ReactJS.
                </p>
                <div className="social-media">
                    {socialMediaData.map(Link => {
                        if (Link.key === 6 || Link.key === 8) {
                            //excluding the Email and Phone links from adding _blank.
                            return <a key={Link.key} href={Link.link} title={Link.title} style={{ "--i": Link.key }}>{Link.icon}</a>;
                        }
                        else {
                            return <a key={Link.key} href={Link.link} title={Link.title} style={{ "--i": Link.key }} target="_blank" rel="noreferrer">{Link.icon}</a>;
                        }
                    })}
                </div>
                <a href="https://raw.githubusercontent.com/mostafasaleh1/cv/main/src/assets/Mostafa%20Saleh%20CV.pdf" className="btn">Download CV</a>
            </main>
            <div className="home-img">
                <img src={Mostafa} alt="Mostafa Saleh" />
            </div>
        </section>
    );
}
export default Home;