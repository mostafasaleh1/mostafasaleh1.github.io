import React from "react";
import TypedSpan from "./Animations/Typed";

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
                    <a href="https://www.facebook.com/Saleh2011/" style={{ '--i': 1 }} title="Facebook" target="_blank" rel="noreferrer"><i className='bx bxl-facebook'></i></a>
                    <a href="https://www.instagram.com/mostafamsaleh/" style={{ '--i': 2 }} title="Instagram" target="_blank" rel="noreferrer"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/mostafasaleh5/" style={{ '--i': 3 }} title="Linkedin" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://wa.me/+201140855227" style={{ '--i': 4 }} title="Whatsapp" target="_blank" rel="noreferrer"><i className='bx bxl-whatsapp'></i></a>
                    <a href="https://github.com/mostafasaleh1" style={{ '--i': 5 }} title="Github" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
                    <a href="mailto:most.saleh@hotmail.com" style={{ '--i': 6 }} title="Email"><i class='bx bx-envelope'></i></a>
                    <a href="https://telegram.me/+201140855227?start=chat" style={{ '--i': 7 }} title="Telegram" target="_blank" rel="noreferrer"><i className='bx bxl-telegram'></i></a>
                    <a href="tel:+201140855227" style={{ '--i': 8 }} title="Phone"><i class='bx bxs-phone'></i></a>
                </div>
                <a href="https://github.com/mostafasaleh1/CV/raw/main/CV.pdf" className="btn">Download CV</a>
            </main>
            <div className="home-img">
                <img className="home-img" src={process.env.PUBLIC_URL + "/images/1.jpg"} alt="img" />
            </div>
        </section>
    );
}
export default Home;