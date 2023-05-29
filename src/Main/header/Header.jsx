import React from "react";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoConstructSharp, IoBriefcase } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai"
import "./header.css";


const Header = () => {


  const navLinks = [
    <a key={1} href="#home" className="navbar-links active-link" title="home"><HiHome /></a>,
    <a key={2} href="#about" className="navbar-links" title="about"><FaUser /></a>,
    <a key={3} href="#services" className="navbar-links" title="services"><BsFillClipboardDataFill /></a>,
    <a key={4} href="#portfolio" className="navbar-links" title="portfolio"><IoConstructSharp /></a>,
    <a key={5} href="#skills" className="navbar-links" title="skills"><IoBriefcase /></a>,
    <a key={6} href="#contact" className="navbar-links" title="contact"><AiTwotonePhone /></a>
  ];

  const outputLinks = navLinks.map(Link => {
    return Link;
  });

  return (
    <header className="header">
      <nav className="on-top-items navbar">{outputLinks}</nav>
    </header>
  );
}

export default Header;