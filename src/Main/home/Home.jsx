import React from "react";
import { TypedSpan } from "../../animations/Exports";
import Mostafa from "../../assets/600x600.webp";
import { socialMediaData } from "../Data";
import { useTranslation } from 'react-i18next';
import { mainActiveLang } from "../../languages/language/ActiveLang";
import { isRTL, RTL } from "../../languages/language/RTL";
import { CVdownloadLink } from "../../CVdownloadLink";
import "./home.css";

const Home = () => {

    const { t } = useTranslation("main");

    return (
        <section className={`home ${RTL()} home-section`} id="home">
            <main className="home-content">
                <h3>
                    {t(`${mainActiveLang()}.home.greeting`)}
                </h3>
                <h1>
                    <strong>
                        {t(`${mainActiveLang()}.home.myname`)}
                    </strong>
                </h1>
                <h3>
                    {t(`${mainActiveLang()}.home.andima`)} <TypedSpan />
                </h3>
                <p>
                    {t(`${mainActiveLang()}.home.pcontent`)}
                </p>
                <div className={`${isRTL() ? `${RTL()}` : null}`}>
                    <div className={`social-media-and-button-container`}>
                        <div className={`social-media`}>
                            {socialMediaData.map(Link => {
                                if (Link.key === 6 || Link.key === 8) {
                                    //excluding the Email and Phone links from adding _blank.
                                    return <a key={Link.key} href={Link.link} title={t(`${mainActiveLang()}${Link.title}`)} style={{ "--i": Link.key }}>{Link.icon}</a>;
                                }
                                else {
                                    return <a key={Link.key} href={Link.link} title={t(`${mainActiveLang()}${Link.title}`)} style={{ "--i": Link.key }} target="_blank" rel="noreferrer">{Link.icon}</a>;
                                }
                            })}
                        </div>

                        <a href={CVdownloadLink} className="btn" title={t(`${mainActiveLang()}.home.downloadcv`)}>{t(`${mainActiveLang()}.home.downloadcv`)}</a>
                    </div>
                </div>
            </main>

            <div className="home-img">
                <img src={Mostafa} alt={t(`${mainActiveLang()}.home.myname`)} title={t(`${mainActiveLang()}.home.myname`)} className={isRTL() === true ? "home-img-animation-rtl" : "home-img-animation"} />
                <div className="home-image-shadow" />
            </div>
        </section>
    );
}
export default Home;