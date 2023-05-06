import React from "react";
import Language from "./Language";
import "./footer.css";
import { TiArrowUpOutline } from 'react-icons/ti';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2023 by <a href="https://www.linkedin.com/in/mostafasaleh5" title="Mostafa Saleh Linkedin" rel="noreferrer" target="_blank"><span>Mostafa Saleh</span></a></p>
            </div>
                <Language />
            <div className="footer-iconTop">
                <a href="#home"><TiArrowUpOutline /></a>
            </div>
        </footer>
    );
}
export default Footer;