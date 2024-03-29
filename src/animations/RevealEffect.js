import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { isRTL } from "../languages/language/RTL";

export const RevealEffect = () => {
    // Reveal Effect
    useEffect(() => {
        if (window.innerWidth <= 768) {
            ScrollReveal({
                reset: false,
                distance: '80px',
                duration: 2000,
                delay: 200
            });

            ScrollReveal().reveal('.heading, .about h2', { origin: 'top' });
            ScrollReveal().reveal('.about img, .services-container, .portfolio-box, .contact form, .about-content, .technologies, .experience', { origin: 'bottom' });
        }
        else {
            ScrollReveal({
                reset: false,
                distance: '80px',
                duration: 2000,
                delay: 200
            });

            ScrollReveal().reveal('.heading, .about h2', { origin: 'top' });
            ScrollReveal().reveal('.services-container, .portfolio-box, .contact .input-box, textarea, .about-content, .projects-box', { origin: 'bottom' });
            ScrollReveal().reveal(`${isRTL() ? ".about img, .blog-post, " : ""}.experience`, { origin: 'right' });
            ScrollReveal().reveal(`${isRTL() ? "" : ".about img, .blog-post, "}.technologies`, { origin: 'left' });
        }
    }, []);
}