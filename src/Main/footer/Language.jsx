import React, {useState} from 'react';
import "./language.css";
import "./footer.css"
import { IoEarth } from "react-icons/io5";


const Language = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };

    const activeLanguage = () => {
    const lang = document.documentElement.lang;
        if (lang === "en") {
            return "English";
        }
        else if (lang === "ar") {
            return "العربية";
        }
        else if (lang === "ru") {
            return "Русский";
        }
    }

    return (
        <div className='language' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='active-language-container'><IoEarth /> <span>{activeLanguage()}</span></div>
            <div className={isHovering ? 'languages-bar show-language-bar' : "languages-bar"}>
                <a href={`${process.env.PUBLIC_URL}/ar/index.html`}>العربية</a>
                <a href={`${process.env.PUBLIC_URL}/ru/index.html`}>Русский</a>
            </div>
        </div>
    )
}

export default Language;