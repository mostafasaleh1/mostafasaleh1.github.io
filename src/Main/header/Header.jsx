import React from "react";
import { headerLinksData } from "../Data";
import { RTL } from "../../languages/language/RTL";
import "./header.css";


const Header = () => {
  return (
    <header className="header">
      <nav className={`on-top-items navbar ${RTL()}`}>{headerLinksData.map(headerLink => {
        if (headerLink.key === 1) {
          return <a key={headerLink.key} href={headerLink.link} className="navbar-links active-link" title={headerLink.title}>{headerLink.icon}</a>;
        }
        else {
          return <a key={headerLink.key} href={headerLink.link} className="navbar-links" title={headerLink.title}>{headerLink.icon}</a>;
        }
      })}</nav>
    </header>
  );
}

export default Header;