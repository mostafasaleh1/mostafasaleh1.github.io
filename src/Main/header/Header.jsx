import React, { useState } from "react";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoConstructSharp, IoLanguage, IoClose, IoBriefcase } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai"
import "./header.css";
import { CgMenuLeftAlt } from "react-icons/cg";


function Header() {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsTheMenuOpen(!isTheMenuOpen);
  }

  const navLinks = [
    <a key={1} href="#home" className="navbar-links active" title="home" onClick={toggleMenu}><HiHome /></a>,
    <a key={2} href="#about" className="navbar-links" title="about" onClick={toggleMenu}><FaUser /></a>,
    <a key={3} href="#services" className="navbar-links" title="services" onClick={toggleMenu}><BsFillClipboardDataFill /></a>,
    <a key={4} href="#portfolio" className="navbar-links" title="portfolio" onClick={toggleMenu}><IoConstructSharp /></a>,
    <a key={5} href="#skills" className="navbar-links" title="skills" onClick={toggleMenu}><IoBriefcase /></a>,
    <a key={6} href="#contact" className="navbar-links" title="contact" onClick={toggleMenu}><AiTwotonePhone /></a>
  ];

  const outputLinks = navLinks.map(Link => {
    return Link;
  });

  const navbar = <nav className={isTheMenuOpen ? "navbar on" : "navbar"} >{outputLinks}</nav>;

  return (
    <header className="header">
      {isTheMenuOpen ? <IoClose id="menu-icon" onClick={toggleMenu} /> : <CgMenuLeftAlt id="menu-icon" onClick={toggleMenu} />}
      {navbar}
    </header>
  );
}

export default Header;