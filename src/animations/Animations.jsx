import Header from "../Main/header/Header";
import Home from "../Main/home/Home";
import About from "../Main/about/About";
import Services from "../Main/services/Services";
import Portfolio from '../Main/portfolio/Portfolio';
import Skills from "../Main/skills/Skills";
import Contact from "../Main/contact/Contact";
import Footer from "../Main/footer/Footer";
import { RevealEffect } from "./RevealEffect";
import { ActiveClass } from "./ActiveClass";

const Animations = () => {

    ActiveClass();
    RevealEffect();

    const containerArray = [
        <Header key={1} />,
        <Home key={2} />,
        <About key={3} />,
        <Services key={4} />,
        <Portfolio key={5} />,
        <Skills key={6} />,
        <Contact key={7} />,
        <Footer key={8} />
    ];

    return containerArray;
}

export default Animations;