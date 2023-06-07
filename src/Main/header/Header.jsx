import React from "react";
import { headerLinksData } from "../Data";
import { RTL } from "../../languages/language/RTL";
import { mainActiveLang } from "../../languages/language/ActiveLang";
import { useTranslation } from "react-i18next";
import "./header.css";


const Header = () => {
  const { t } = useTranslation("main");
  return (
    <header className="header">
      <nav className={`on-top-items navbar ${RTL()}`}>{headerLinksData.map(headerLink => {
        if (headerLink.key === 1) {
          return <a key={headerLink.key} href={headerLink.link} className="navbar-links active-link" title={t(`${mainActiveLang()}${headerLink.title}`)}>{headerLink.icon}</a>;
        }
        else {
          return <a key={headerLink.key} href={headerLink.link} className="navbar-links" title={t(`${mainActiveLang()}${headerLink.title}`)}>{headerLink.icon}</a>;
        }
      })}</nav>
    </header>
  );
}

export default Header;