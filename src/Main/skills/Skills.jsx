import "./skills.css";
import ExperienceBox from "./ExperienceBox";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import { PythonIcon, CssIcon, ExpressIcon, GitIcon, HtmlIcon, JavascriptIcon, MongodbIcon, NodejsIcon, ReactIcon, ReaduxIcon } from "../../assets/Exports";


const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="heading"><span>Skills</span> & <span>Experience</span></h2>
            <div className="technologies-experience-container">
                <div className="technologies">
                    <span><HtmlIcon /></span>
                    <span><PythonIcon /></span>
                    <span><CssIcon /></span>
                    <span><ExpressIcon /></span>
                    <span><GitIcon /></span>
                    <span className="small-icons"><SiGithub /></span>
                    <span><JavascriptIcon /></span>
                    <span><MongodbIcon /></span>
                    <span><NodejsIcon /></span>
                    <span><ReactIcon /></span>
                    <span><ReaduxIcon /></span>
                    <span className="small-icons"><SiTailwindcss /></span>
                </div>
                <div className="experience">
                    <ExperienceBox
                        year="2022"
                        h3Content="Experience1"
                        company="company"
                        pContent="Lorem ipsum dolor sit amet consectetur adipisicing."
                    />

                    <ExperienceBox
                        year="2018"
                        h3Content="Experience2"
                        company="company"
                        pContent="Lorem ipsum dolor sit amet consectetur adipisicing."
                    />
                </div>
            </div>
        </section>
    );
}
export default Skills;