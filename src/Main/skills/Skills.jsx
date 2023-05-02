import "./skills.css";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5"

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills & Experience</span></h2>
            <div className="technologies-experience-container">
            <div className="technologies">
                <span><FaReact /></span>
                <span><FaHtml5 /></span>
                <span><FaCss3 /></span>
                <span><IoLogoJavascript /></span>
            </div>
            <div className="experience">
                    <div className="experience-box">
                        <h3>experience1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="experience-box">
                        <h3>experience2</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
            </div>
            </div>
        </section>
    );
}
export default Skills;