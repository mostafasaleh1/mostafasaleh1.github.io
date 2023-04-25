import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsTheMenuOpen(!isTheMenuOpen);
  }

  const navLinks = [
    <a href="#home" className="navbar-links active" title="home">Home</a>,
    <a href="#about" className="navbar-links" title="about">About</a>,
    <a href="#services" className="navbar-links" title="services">Services</a>,
    <a href="#portfolio" className="navbar-links" title="portfolio">Portfolio</a>,
    <a href="#contact" className="navbar-links" title="contact">Contact</a>,
  ];

  const navbar = <nav className={isTheMenuOpen ? "navbar on" : "navbar off first-off"} >{navLinks}</nav>;
  const menuIcon = <i className={isTheMenuOpen ? "bx bx-x" : 'bx bx-menu'} id="menu-icon" onClick={toggleMenu}></i>;

  return (
    <header className="header">
      {menuIcon}
      {navbar}
    </header>
  );
}

export default Header;