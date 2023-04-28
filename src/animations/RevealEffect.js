import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

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
}