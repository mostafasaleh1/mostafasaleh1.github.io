import React from "react";
import Language from "../../languages/Language";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2023 by <a href="https://www.linkedin.com/in/mostafasaleh5" title="Mostafa Saleh Linkedin" rel="noreferrer" target="_blank"><span>Mostafa Saleh</span></a></p>
            </div>
            <Language />
        </footer>
    );
}
export default Footer;