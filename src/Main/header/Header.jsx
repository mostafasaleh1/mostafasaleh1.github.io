import React from "react";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <i className='bx bx-menu' id="menu-icon"></i>
            <nav className="navbar off first-off">
                <a href="#home" className="navbar-links active" title="home">Home</a>
                <a href="#about" className="navbar-links" title="about">About</a>
                <a href="#services" className="navbar-links" title="services">Services</a>
                <a href="#portfolio" className="navbar-links" title="portfolio">Portfolio</a>
                <a href="#contact" className="navbar-links" title="contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;