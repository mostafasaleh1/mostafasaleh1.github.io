import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { isRTL } from "../languages/language/RTL";

export const RevealEffect = () => {
    // Reveal Effect
    useEffect(() => {
        if (window.innerWidth <= 764) {
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
            ScrollReveal().reveal('.services-container, .portfolio-box, .contact .input-box, textarea, .about-content', { origin: 'bottom' });
            ScrollReveal().reveal(`${isRTL() ? ".about img, " : ""}.experience`, { origin: 'right' });
            ScrollReveal().reveal(`${isRTL() ? "" : ".about img, "}.technologies`, { origin: 'left' });
        }
    }, []);
}