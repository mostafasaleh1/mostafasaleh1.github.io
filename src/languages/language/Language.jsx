import React, { useState } from 'react';
import "./language.css";
import "../../Main/footer/footer.css";
import { useTranslation } from 'react-i18next';
import { activeFlag } from './ActiveLang';
import { GB, SA, RU, DE } from '../../assets/Exports';
import { RTL } from './RTL';


const Language = () => {

    const { i18n } = useTranslation();

    const activeLangFullName = () => {
        if (i18n.language === "ar") {
            return "العربية";
        }
        else if (i18n.language === "en") {
            return "English";
        }
        else if (i18n.language === "ru") {
            return "Русский";
        }
        else if (i18n.language === "de") {
            return "Deutsch";
        }
    }

    let [activeLanguage, setActiveLanguage] = useState(activeLangFullName());

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const buttons = [
        <button key={1} onClick={() => {
            setActiveLanguage("Русский");
            i18n.changeLanguage("ru");
            document.documentElement.lang = "ru";
        }} style={{ display: i18n.language === "ru" ? "none" : "flex" }} className={RTL()} type='button' title='Change Language to Russian'><RU /> Русский</button>,

        <button key={2} onClick={() => {
            setActiveLanguage("العربية");
            i18n.changeLanguage("ar");
            document.documentElement.lang = "ar";
        }} style={{ display: i18n.language === "ar" ? "none" : "flex" }} className={RTL()} type='button' title='Change Language to Arabic'><SA /> العربية</button>,

        <button key={3} onClick={() => {
            setActiveLanguage("English");
            i18n.changeLanguage("en");
            document.documentElement.lang = "en";
        }} style={{ display: i18n.language === "en" ? "none" : "flex" }} className={RTL()} type='button' title='Change Language to English'><GB /> English</button>,

        <button key={4} onClick={() => {
            setActiveLanguage("Deutsch");
            i18n.changeLanguage("de");
            document.documentElement.lang = "de";
        }} style={{ display: i18n.language === "de" ? "none" : "flex" }} className={RTL()} type='button' title='Change Language to German'><DE /> Deutsch</button>
    ];

    return (
        <div className='language' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`active-language-container ${RTL()}`}>{ activeFlag() } <span id='active-language-container'>{ activeLanguage }</span></div>
            <div className={isHovering ? 'languages-bar on-top-items show-language-bar' : "on-top-items languages-bar"}>
                {buttons}
            </div>
        </div>
    )
}

export default Language;