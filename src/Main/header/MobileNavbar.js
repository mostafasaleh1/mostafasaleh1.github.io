// import React from "react";

// function MobileNavbar() {

// let navlinks = document.querySelectorAll(".navbar-links");
// let menuIcon = document.getElementById("menu-icon");
// let navbar = document.getElementsByClassName('navbar');


// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navbar[0].classList.toggle("on");
//     navbar[0].classList.toggle("off");
//     navbar[0].classList.remove("first-off");
//     navlinks.forEach((elmnt) => {
//         elmnt.onclick = () => {
//             navbar[0].classList.remove("on");
//             navbar[0].classList.add("off");
//             menuIcon.classList.remove("bx-x");
//         }
//     });
// };
// return (
//             <header className="header">
//             <i className='bx bx-menu' id="menu-icon"></i>
//             <nav className="navbar off first-off">
//                 <a href="#home" className="navbar-links active" title="home">Home</a>
//                 <a href="#about" className="navbar-links" title="about">About</a>
//                 <a href="#services" className="navbar-links" title="services">Services</a>
//                 <a href="#portfolio" className="navbar-links" title="portfolio">Portfolio</a>
//                 <a href="#contact" className="navbar-links" title="contact">Contact</a>
//             </nav>
//         </header>
// );
// }
// export default MobileNavbar;