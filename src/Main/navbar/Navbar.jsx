import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { navLinksData } from "../Data";


import "./navbar.css";

const Navbar = () => {
    const [isTheMenuOpen, setIsTheMenuOpen] = useState(false);

    let handleMenu = () => {
        setIsTheMenuOpen(!isTheMenuOpen)
    }

    return (
        <React.Fragment>
            {isTheMenuOpen ? <IoClose className="menu-icon" onClick={handleMenu} /> : <CgMenuLeftAlt className="menu-icon" onClick={handleMenu} />}
            <nav className={isTheMenuOpen ? "new-navbar on-top-items new-navbar-on" : "new-navbar on-top-items"}>
                <div className="new-nav-links-container">
                    {
                        navLinksData.map(navLink => <NavLink key={navLink.key} to={navLink.link} className="new-navbar-link" title={navLink.title} ><div className="new-navbar-icons">{navLink.icon} {navLink.textContent}</div></NavLink>)
                    }
                </div>
            </nav>
        </React.Fragment>

    )
}

export default Navbar;