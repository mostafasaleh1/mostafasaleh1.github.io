import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Header from "./Main/header/Header";
import Home from "./Main/home/Home";
import About from "./Main/about/About";
import Services from "./Main/services/Services";
import Portfolio from './Main/portfolio/Portfolio';
import Contact from "./Main/contact/Contact";
import Footer from './Main/footer/Footer';
import { motion, useScroll } from "framer-motion";

const RevealEffect = () => {



    // ACTIVE CLASS AND ACTIVE LINKS

    window.addEventListener("scroll", function () {
        const navLinks = document.querySelectorAll(".navbar-links");
        const secArr = document.querySelectorAll('section');
        secArr.forEach(function (SecInViewport) {
            let id = SecInViewport.getAttribute("id");
            let bounds = SecInViewport.getBoundingClientRect();

            if (bounds.top <= 350.00 && bounds.top >= -350.00) {
                if (!SecInViewport.classList.contains("active-class")) {
                    SecInViewport.classList.add("active-class");
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                    });
                }
            }
            else {
                SecInViewport.classList.remove("active-class");
            }
        });
    });

    const { scrollYProgress } = useScroll();

    useEffect(() => {
        if (window.innerWidth <= 764) {
            ScrollReveal({
                reset: false,
                distance: '80px',
                duration: 2000,
                delay: 200
            });

            ScrollReveal().reveal('.heading, .about h2, .home h3, .social-media a', { origin: 'right' });
            ScrollReveal().reveal('.services-container, .portfolio-box, .contact form, .about-content, .home h1, .home p, .home .btn', { origin: 'left' });
            ScrollReveal().reveal('.about img, .home img', { origin: 'bottom' });
        }
        else {
            ScrollReveal({
                reset: false,
                distance: '80px',
                duration: 2000,
                delay: 200
            });

            ScrollReveal().reveal('.heading, .about h2', { origin: 'top' });
            ScrollReveal().reveal('.services-container, .portfolio-box, .contact .input-box, textarea, .about-content, .footer', { origin: 'bottom' });
            ScrollReveal().reveal('.home img', { origin: 'right' });
            ScrollReveal().reveal('.about img', { origin: 'left' });
        }
    }, []);

    return (
        <div className='app-container'>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <Header />
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default RevealEffect;