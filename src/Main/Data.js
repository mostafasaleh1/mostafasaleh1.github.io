/* IMPORTING SOCIAL MEDIA LINKS ICONS */
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaTelegramPlane, FaRegEnvelope } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { SiDuolingo } from "react-icons/si";
/* IMPORTING NAVLINKS ICONS */
import { IoConstructSharp, IoStatsChartSharp } from "react-icons/io5";
import { FaBloggerB, FaInfo, FaVk } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
/* IMPORTING HEADER ICONS */
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
    /*{
        key: 2,
        link: "https://www.instagram.com/mostafamsaleh/",
        title: ".home.instagram",
        icon: <BsInstagram />
    },*/
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
    /*{ 
        key: 9, 
        link: "https://www.duolingo.com/profile/mostafasaleh2015", 
        title: ".home.duolingo", 
        icon: <SiDuolingo />
    },
    { 
        key: 10, 
        link: "https://vk.com/mostafasaleh", 
        title: ".home.vk", 
        icon: <FaVk />
    },*/
];
/* END SOCIAL MEDIA LINKS */


/* NAVBAR LINKS */
/* NAVBAR LINKS */
export const navLinksData = [
    { key: 1, link: "/", title: ".navbar.home", icon: <HiHome />, textContent: ".navbar.home" },
    { key: 2, link: "/about/", title: ".navbar.about", icon: <FaInfo />, textContent: ".navbar.about" },
    { key: 3, link: "/blog/", title: ".navbar.blog", icon: <FaBloggerB />, textContent: ".navbar.blog" },
    { key: 4, link: "/projects/", title: ".navbar.projects", icon: <IoConstructSharp />, textContent: ".navbar.projects"},
    /*{ key: 5, link: "/cv/", title: ".navbar.cvresume", icon: <ImProfile />, textContent: ".navbar.cv" },*/
    { key: 6, link: "/stats/", title: ".navbar.githubstats", icon: <IoStatsChartSharp />, textContent: ".navbar.githubstats" }
];
/* END NAVBAR LINKS */



/* HEADER LINKS */
/* HEADER LINKS */
export const homeHeaderLinksData = [
    { key: 1, link: "#home", title: ".header.home", icon: <HiHome /> },
    { key: 2, link: "#contact", title: ".header.contact", icon: <AiTwotonePhone /> }
];

export const aboutHeaderLinksData = [
    { key: 1, link: "#about", title: ".header.about", icon: <FaInfo /> },
    { key: 2, link: "#skills", title: ".header.skills", icon: <IoBriefcase /> },
];
/* END HEADER LINKS */