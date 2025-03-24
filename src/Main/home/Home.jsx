import React from "react";
import { TypedSpan } from "../../animations/Exports";
import Mostafa from "../../assets/600x600.webp";
import { socialMediaData } from "../Data";
import { useTranslation } from 'react-i18next';
import { mainActiveLang } from "../../languages/language/ActiveLang";
import { isRTL, RTL } from "../../languages/language/RTL";
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

                        <a href="https://my.microsoftpersonalcontent.com/personal/317e50c5e6fb11ca/_layouts/15/download.aspx?UniqueId=95bca8a4-5945-409c-a3a0-7fc50e2d2a7f&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiIxM2YyZmY3MC04NTYyLTQzYWItODBlNC1hZjU1YzY4MTNlNTciLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3NDI4MTEwNzEifQ.KHOccNF-JXMr66Ib0fT1n_j21wrT6oQWARgz-5Yr2bOpbWkT3L5mC5CR7oiOnDeoQ0IVdlWOvFJAYjfbOwgOFBhmQbGkhl2eKucP_IWQUK5c8rnLwooFxru2QHs1ZAI7eIMbF13YE5bU1ywr_KJQAOHgRsnhB-eEYOoDxQkIhWil7lTWjaoQ6oMyR-PB4mQuW3nIgkV_Hh0z-nQTkk8JuFylyfZnXxNLnjxk8TmiYwT1WAGaLSnsMPkR8gfzw5WqmRS5b5iNCxnaCSUhZyO8Rw31xW_8BglBIPiFCDaxI0p-bUgtV6u-01mownbsvTVZlXRLdYR5C_43T7ar2CXRf5E6-tcst11zRqnhjPPMi5UbzZTyxcbCGAxL-Inf3LqbF5NBS-9n3kyHVdCBiCkUxFKNq9uKxF_f-RbMe3lNLC0.yaOolrvnARyuevIa9dy9yFYr6U49H-eMId8PTTjZON8&ApiVersion=2.0&AVOverride=1" className="btn" title={t(`${mainActiveLang()}.home.downloadcv`)}>{t(`${mainActiveLang()}.home.downloadcv`)}</a>
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