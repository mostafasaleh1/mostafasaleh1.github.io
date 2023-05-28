import React, { useState } from 'react';
import "./language.css";
import "../Main/footer/footer.css";
import { IoEarth } from "react-icons/io5";
const Language = () => {

    let [activeLanguage, setActiveLanguage] = useState("English");

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const buttons = [
        <button key={1} onClick={() => setActiveLanguage("Русский")} style={{ display: activeLanguage === "Русский" ? "none" : "block" }}>Русский</button>,
        <button key={2} onClick={() => setActiveLanguage("العربية")} style={{ display: activeLanguage === "العربية" ? "none" : "block" }}>العربية</button>,
        <button key={3} onClick={() => setActiveLanguage("English")} style={{ display: activeLanguage === "English" ? "none" : "block" }}>English</button>
    ];

    return (
        <div className='language' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='active-language-container'><IoEarth /> <span id='active-language-container'>{ activeLanguage }</span></div>
            <div className={isHovering ? 'languages-bar on-top-items show-language-bar' : "on-top-items languages-bar"}>
                {buttons}
            </div>
        </div>
    )
}

export default Language;