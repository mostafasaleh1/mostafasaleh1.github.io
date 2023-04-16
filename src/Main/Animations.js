/* 
 *TYPING ANIMATION 
 */

var typed = new Typed(".typed", {
    strings: ["Software Engineer", "Frontend Developer"],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
})
/* END TYPING ANIMATION */



/*
 * highlighting active class and changing the corresponding navbar link color when the viewport is on the active class.
 */

var navlinks = document.querySelectorAll(".navbar-links");

window.addEventListener("scroll", function () { //making the window do the function below while scrolling, this fucntion cotinuously checks if the section is in the vieport or not. If yes it adds the active class, if not it remove the active class.
    let secArr = document.querySelectorAll('section'); // creating an array that contains all the section on the document.
    secArr.forEach(function (SecInViewport) { // looping over the scetion in the viewport and checking continuously if it's existing or not.
        let id = SecInViewport.getAttribute("id");
        let bounds = SecInViewport.getBoundingClientRect(); // getting the dimentions of the rectangle of the section being looped and storing it into a variable called bound.

//these are the dimensions that determine if that section is 75% in the viewport or not.

        if (bounds.top <= 350.00 && bounds.top >= -350.00) { // checking if the rectangle is in the viewport or not.
            if (!SecInViewport.classList.contains("active-class")) { //checking if the rectangle doesn't contain the activ class.
                SecInViewport.classList.add("active-class"); //if the active class doesn't exist and the seciton is in the viewport, it'll add the class as an attribute to the sction in the viewport.
                navlinks.forEach(link => {
                    link.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            }
        } 
        else {
            SecInViewport.classList.remove("active-class"); // if the section already has an active class and this section is not in the viewport, it'll remove the class.
        }
    });
});
/* END ACTIVE CLASS */



/**
 * programming Menu icon in mobile view
 */

let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementsByClassName('navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar[0].classList.toggle("on");
    navbar[0].classList.toggle("off");
    navbar[0].classList.remove("first-off");
    navlinks.forEach((elmnt) => {
        elmnt.onclick = () => {
            navbar[0].classList.remove("on");
            navbar[0].classList.add("off");
            menuIcon.classList.remove("bx-x");
        }
    });
};
/* END */



/**
 * Scroll Reveal
 */

ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form, .about-content', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });
/* END */