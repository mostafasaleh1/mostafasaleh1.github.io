/* IMPORTING SOCIAL MEDIA LINKS ICONS */
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaTelegramPlane, FaRegEnvelope } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
/* IMPORTING NAVLINKS ICONS */
import { IoConstructSharp, IoStatsChartSharp } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
/* IMPORTING HEADER ICONS */
import { BsFillClipboardDataFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai";


/* SOCIAL MEDIA LINKS */
export const socialMediaData = [
    {
        key: 1,
        link: "https://www.facebook.com/Saleh2011/",
        title: "Facebook",
        icon: <FaFacebookF />
    },
    {
        key: 2,
        link: "https://www.instagram.com/mostafamsaleh/",
        title: "Instagram",
        icon: <BsInstagram />
    },
    { 
        key: 3, 
        link: "https://www.linkedin.com/in/mostafasaleh5/", 
        title: "Linkedin", 
        icon: <FaLinkedinIn />
    },
    { 
        key: 4, 
        link: "https://wa.me/+201140855227", 
        title: "Whatsapp", 
        icon: <BsWhatsapp />
    },
    { 
        key: 5, 
        link: "https://github.com/mostafasaleh1", 
        title: "Github", 
        icon: <BsGithub />
    },
    { 
        key: 6, 
        link: "mailto:most.saleh@hotmail.com", 
        title: "Email", 
        icon: <FaRegEnvelope />
    },
    { 
        key: 7, 
        link: "https://telegram.me/+201140855227?start=chat", 
        title: "Telegram", 
        icon: <FaTelegramPlane />
    },
    { 
        key: 8, 
        link: "tel:+201140855227", 
        title: "Phone", 
        icon: <ImPhone />
    },
];
/* END SOCIAL MEDIA LINKS */


/* NAVBAR LINKS */
/* NAVBAR LINKS */
export const navLinksData = [
    { key: 1, link: "/myprofile/", title: "Home", icon: <HiHome />, textContent: "Home" },
    { key: 2, link: "/myprofile/blog/", title: "Blog", icon: <FaBloggerB />, textContent: "Blog" },
    { key: 3, link: "/myprofile/projects/", title: "Projects", icon: <IoConstructSharp />, textContent: "Projects"},
    { key: 4, link: "/myprofile/cv/", title: "CV, Resume", icon: <ImProfile />, textContent: "CV" },
    { key: 5, link: "/myprofile/githubstats/", title: "Github", icon: <IoStatsChartSharp />, textContent: "Github Stats" }
];
/* END NAVBAR LINKS */



/* HEADER LINKS */
/* HEADER LINKS */
export const headerLinksData = [
    { key: 1, link: "#home", title: "home", icon: <HiHome /> },
    { key: 2, link: "#about", title: "about", icon: <FaUser /> },
    { key: 3, link: "#services", title: "services", icon: <BsFillClipboardDataFill /> },
    { key: 4, link: "#portfolio", title: "portfolio", icon: <IoConstructSharp /> },
    { key: 5, link: "#skills", title: "skills", icon: <IoBriefcase /> },
    { key: 6, link: "#contact", title: "contact", icon: <AiTwotonePhone /> }
];
/* END HEADER LINKS */