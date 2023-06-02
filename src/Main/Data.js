/* IMPORTING SOCIAL MEDIA LINKS ICONS */
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaTelegramPlane, FaRegEnvelope } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
/* IMPORTING NAVLINKS ICONS */
import { IoConstructSharp, IoStatsChartSharp } from "react-icons/io5";
import { FaBloggerB, FaInfo } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
/* IMPORTING HEADER ICONS */
import { BsFillClipboardDataFill } from "react-icons/bs";
import { IoBriefcase } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai";


/* SOCIAL MEDIA LINKS */
export const socialMediaData = [
    {
        key: 1,
        link: "https://www.facebook.com/Saleh2011/",
        title: ".home.facebook",
        icon: <FaFacebookF />
    },
    {
        key: 2,
        link: "https://www.instagram.com/mostafamsaleh/",
        title: ".home.instagram",
        icon: <BsInstagram />
    },
    { 
        key: 3, 
        link: "https://www.linkedin.com/in/mostafasaleh5/", 
        title: ".home.linkedin", 
        icon: <FaLinkedinIn />
    },
    { 
        key: 4, 
        link: "https://wa.me/+201140855227", 
        title: ".home.whatsapp", 
        icon: <BsWhatsapp />
    },
    { 
        key: 5, 
        link: "https://github.com/mostafasaleh1", 
        title: ".home.github", 
        icon: <BsGithub />
    },
    { 
        key: 6, 
        link: "mailto:most.saleh@hotmail.com", 
        title: ".home.email", 
        icon: <FaRegEnvelope />
    },
    { 
        key: 7, 
        link: "https://telegram.me/+201140855227?start=chat", 
        title: ".home.telegram", 
        icon: <FaTelegramPlane />
    },
    { 
        key: 8, 
        link: "tel:+201140855227", 
        title: ".home.phone", 
        icon: <ImPhone />
    },
];
/* END SOCIAL MEDIA LINKS */


/* NAVBAR LINKS */
/* NAVBAR LINKS */
export const navLinksData = [
    { key: 1, link: "/myprofile/", title: "Home", icon: <HiHome />, textContent: "Home" },
    { key: 2, link: "/myprofile/about/", title: "About", icon: <FaInfo />, textContent: "About" },
    { key: 3, link: "/myprofile/blog/", title: "Blog", icon: <FaBloggerB />, textContent: "Blog" },
    { key: 4, link: "/myprofile/projects/", title: "Projects", icon: <IoConstructSharp />, textContent: "Projects"},
    { key: 5, link: "/myprofile/cv/", title: "CV, Resume", icon: <ImProfile />, textContent: "CV" },
    { key: 6, link: "/myprofile/githubstats/", title: "Github", icon: <IoStatsChartSharp />, textContent: "Github Stats" }
];
/* END NAVBAR LINKS */



/* HEADER LINKS */
/* HEADER LINKS */
export const headerLinksData = [
    { key: 1, link: "#home", title: "Home", icon: <HiHome /> },
    { key: 2, link: "#about", title: "About", icon: <FaInfo /> },
    { key: 3, link: "#services", title: "Services", icon: <BsFillClipboardDataFill /> },
    { key: 4, link: "#portfolio", title: "Portfolio", icon: <IoConstructSharp /> },
    { key: 5, link: "#skills", title: "Skills", icon: <IoBriefcase /> },
    { key: 6, link: "#contact", title: "Contact", icon: <AiTwotonePhone /> }
];
/* END HEADER LINKS */