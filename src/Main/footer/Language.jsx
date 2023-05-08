import React, { useState } from 'react';
import "./language.css";
import "./footer.css"
import { IoEarth } from "react-icons/io5";


const Language = () => {

    let [activeLanguage, setActiveLanguage] = useState("English")

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const buttons = [
        <button onClick={() => setActiveLanguage("Русский")} style={{ display: activeLanguage === "Русский" ? "none" : "block" }}>Русский</button>,
        <button onClick={() => setActiveLanguage("العربية")} style={{ display: activeLanguage === "العربية" ? "none" : "block" }}>العربية</button>,
        <button onClick={() => setActiveLanguage("English")} style={{ display: activeLanguage === "English" ? "none" : "block" }}>English</button>
    ];


    return (
        <div className='language' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='active-language-container'><IoEarth /> <span>{ activeLanguage }</span></div>
            <div className={isHovering ? 'languages-bar on-top-items show-language-bar' : "on-top-items languages-bar"}>
                {buttons}
            </div>
        </div>
    )
}

export default Language;