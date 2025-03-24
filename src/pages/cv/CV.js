import React from "react";
import Header from "./cvapp/components/primary/header/Header";
import MainContainer from "./cvapp/MainContainer";
import { cvActiveLang } from "../../languages/language/ActiveLang";
import { useTranslation } from 'react-i18next';
import Footer from "../../Main/footer/Footer";
import "./cv.css";

const CV = () => {
    const { t } = useTranslation("cv");
    return (
    <React.Fragment>
    <section className="cv">
        <h2 className="heading">{t(`${cvActiveLang()}.cv.my`)} <span>{t(`${cvActiveLang()}.cv.resume`)}</span></h2>
        <div className="cv-app">
            <div className="cv-page">
                <Header />
                <MainContainer />
            </div>
        </div>
        <a href="https://my.microsoftpersonalcontent.com/personal/317e50c5e6fb11ca/_layouts/15/download.aspx?UniqueId=95bca8a4-5945-409c-a3a0-7fc50e2d2a7f&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiIxM2YyZmY3MC04NTYyLTQzYWItODBlNC1hZjU1YzY4MTNlNTciLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3NDI4MTEwNzEifQ.KHOccNF-JXMr66Ib0fT1n_j21wrT6oQWARgz-5Yr2bOpbWkT3L5mC5CR7oiOnDeoQ0IVdlWOvFJAYjfbOwgOFBhmQbGkhl2eKucP_IWQUK5c8rnLwooFxru2QHs1ZAI7eIMbF13YE5bU1ywr_KJQAOHgRsnhB-eEYOoDxQkIhWil7lTWjaoQ6oMyR-PB4mQuW3nIgkV_Hh0z-nQTkk8JuFylyfZnXxNLnjxk8TmiYwT1WAGaLSnsMPkR8gfzw5WqmRS5b5iNCxnaCSUhZyO8Rw31xW_8BglBIPiFCDaxI0p-bUgtV6u-01mownbsvTVZlXRLdYR5C_43T7ar2CXRf5E6-tcst11zRqnhjPPMi5UbzZTyxcbCGAxL-Inf3LqbF5NBS-9n3kyHVdCBiCkUxFKNq9uKxF_f-RbMe3lNLC0.yaOolrvnARyuevIa9dy9yFYr6U49H-eMId8PTTjZON8&ApiVersion=2.0&AVOverride=1" className="btn" type="button" title="Download CV">{t(`${cvActiveLang()}.cv.download`)}</a>
            </section>
            <Footer />
    </React.Fragment>
    );
}

export default CV;
