import ExperienceBox from "./ExperienceBox";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import { PythonIcon, CssIcon, ExpressIcon, GitIcon, HtmlIcon, JavascriptIcon, MongodbIcon, NodejsIcon, ReactIcon, ReaduxIcon } from "../../../assets/Exports";
import { mainActiveLang } from "../../../languages/language/ActiveLang";
import { useTranslation } from "react-i18next";
import "./skills.css";


const Skills = () => {

    const { t } = useTranslation("main");

    return (
        <section className="skills home-section" id="skills">
            <h2 className="heading">{t(`${mainActiveLang()}.skills.skills`)} <span>{t(`${mainActiveLang()}.skills.experience`)}</span></h2>
            <div className="technologies-experience-container">
                <div className="technologies">
                    <span title={t(`${mainActiveLang()}.skills.myskills.html`)}><HtmlIcon /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.python`)}><PythonIcon /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.css`)}><CssIcon /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.express`)}><ExpressIcon /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.git`)}><GitIcon /></span>
                    <span className="small-icons" title={t(`${mainActiveLang()}.skills.myskills.github`)}><SiGithub /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.javascript`)}><JavascriptIcon /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.mongodb`)}><MongodbIcon /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.nodejs`)}><NodejsIcon /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.react`)}><ReactIcon /></span>
                    <span title={t(`${mainActiveLang()}.skills.myskills.redux`)}><ReaduxIcon /></span>
                    <span className="small-icons" title={t(`${mainActiveLang()}.skills.myskills.tailwindcss`)}><SiTailwindcss /></span>
                </div>
                <div className="experience">
                    <ExperienceBox
                        year={t(`${mainActiveLang()}.skills.box1.year`)}
                        h3Content={t(`${mainActiveLang()}.skills.box1.experience`)}
                        company={t(`${mainActiveLang()}.skills.box1.company`)}
                        pContent={t(`${mainActiveLang()}.skills.box1.pcontent`)}
                    />

                    <ExperienceBox
                        year={t(`${mainActiveLang()}.skills.box2.year`)}
                        h3Content={t(`${mainActiveLang()}.skills.box2.experience`)}
                        company={t(`${mainActiveLang()}.skills.box2.company`)}
                        pContent={t(`${mainActiveLang()}.skills.box2.pcontent`)}
                    />
                </div>
            </div>
        </section>
    );
}
export default Skills;