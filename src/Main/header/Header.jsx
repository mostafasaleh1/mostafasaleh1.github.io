import React, { useState } from "react";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoConstructSharp, IoLanguage } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai"
import "./header.css";


function Header() {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsTheMenuOpen(!isTheMenuOpen);
  }

  const navLinks = [
    <a href="#home" className="navbar-links active" title="home" onClick={toggleMenu}><HiHome /></a>,
    <a href="#about" className="navbar-links" title="about" onClick={toggleMenu}><FaUser /></a>,
    <a href="#services" className="navbar-links" title="services" onClick={toggleMenu}><BsFillClipboardDataFill /></a>,
    <a href="#portfolio" className="navbar-links" title="portfolio" onClick={toggleMenu}><IoConstructSharp /></a>,
    <a href="#contact" className="navbar-links" title="contact" onClick={toggleMenu}><AiTwotonePhone /></a>,
  ];

  const navbar = <nav className={isTheMenuOpen ? "navbar on" : "navbar off"} >{navLinks}</nav>;
  const menuIcon = <i className={isTheMenuOpen ? "bx bx-x" : 'bx bx-menu'} id="menu-icon" onClick={toggleMenu}></i>;


  return (
    <header className="header">
      {menuIcon}
      {navbar}
    </header>
  );
}

export default Header;



// ACTIVE CLASS AND ACTIVE LINKS
var navLinks = document.querySelectorAll(".navbar-links");

window.addEventListener("scroll", function () { 
    let secArr = document.querySelectorAll('section');
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