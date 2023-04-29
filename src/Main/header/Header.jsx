import React, { useState } from "react";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoConstructSharp, IoLanguage, IoClose } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai"
import "./header.css";
import { CgMenuLeftAlt } from "react-icons/cg";


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

  const navbar = <nav className={isTheMenuOpen ? "navbar on" : "navbar"} >{navLinks}</nav>;

  return (
    <header className="header">
      {isTheMenuOpen ? <IoClose id="menu-icon" onClick={toggleMenu} /> : <CgMenuLeftAlt id="menu-icon" onClick={toggleMenu} />}
      {navbar}
    </header>
  );
}

export default Header;