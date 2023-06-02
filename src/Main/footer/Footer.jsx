import React from "react";
import Language from "../../languages/language/Language";
import "./footer.css";

function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; {date} by <a href="https://www.linkedin.com/in/mostafasaleh5" title="Mostafa Saleh Linkedin" rel="noreferrer" target="_blank"><span>Mostafa Saleh</span></a></p>
            </div>
            <Language />
        </footer>
    );
}
export default Footer;