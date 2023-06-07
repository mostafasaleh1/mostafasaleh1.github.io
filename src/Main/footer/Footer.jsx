import React from "react";
import Language from "../../languages/language/Language";
import { mainActiveLang } from "../../languages/language/ActiveLang";
import { useTranslation } from "react-i18next";
import { RTL } from "../../languages/language/RTL";
import "./footer.css";


const Footer = () => {

    const { t } = useTranslation("main");
    const date = new Date().getFullYear();

    return (
        <footer className={`footer ${RTL()}`}>
            <div className="footer-text">
                <p>{t(`${mainActiveLang()}.footer.copyright`)} &copy; {date} {t(`${mainActiveLang()}.footer.by`)} <a href="https://www.linkedin.com/in/mostafasaleh5" title={t(`${mainActiveLang()}.footer.title`)} rel="noreferrer" target="_blank"><span>{t(`${mainActiveLang()}.footer.myname`)}</span></a></p>
            </div>
            <Language />
        </footer>
    );
}
export default Footer;