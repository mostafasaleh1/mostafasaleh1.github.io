import React, { useState } from "react";
import { IoClose, IoConstructSharp, IoStatsChartSharp } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaBloggerB } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { ImProfile } from "react-icons/im";


import "./navbar.css";

const Navbar = () => {
    const [isTheMenuOpen, setIsTheMenuOpen] = useState(false);

    let handleMenu = () => {
        setIsTheMenuOpen(!isTheMenuOpen)
    }

    const navlinks = [
        <NavLink key={1} to="/myprofile/" className="new-navbar-link" title="Home"><div className="new-navbar-icons"><HiHome /> Home</div></NavLink>,
        <NavLink key={2} to="/myprofile/blog/" className="new-navbar-link" title="Blog"><div className="new-navbar-icons"><FaBloggerB /> Blog</div></NavLink>,
        <NavLink key={3} to="/myprofile/projects/" className="new-navbar-link" title="Projects" ><div className="new-navbar-icons"><IoConstructSharp /> Projects</div></NavLink>,
        <NavLink key={4} to="/myprofile/cv/" className="new-navbar-link" title="CV, Resume" ><div className="new-navbar-icons"><ImProfile /> CV</div></NavLink>,
        <NavLink key={5} to="/myprofile/githubstats/" className="new-navbar-link" title="Github" ><div className="new-navbar-icons"><IoStatsChartSharp /> Github Stats</div></NavLink>
    ];

    return (
        <React.Fragment>
            {isTheMenuOpen ? <IoClose className="menu-icon" onClick={handleMenu} /> : <CgMenuLeftAlt className="menu-icon" onClick={handleMenu} />}
            <nav className={isTheMenuOpen ? "new-navbar on-top-items new-navbar-on" : "new-navbar on-top-items"}>
                <div className="new-nav-links-container">
                    {navlinks.map(link => link)}
                </div>
            </nav>
        </React.Fragment>

    )
}

export default Navbar;