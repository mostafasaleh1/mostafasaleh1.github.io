/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./services.css";
import { BiLineChart, BiPaint, BiCodeAlt } from "react-icons/bi";
import ServiceBox from "./ServiceBox";
import { useTranslation } from 'react-i18next';
import { mainActiveLang } from "../../languages/language/ActiveLang";
import { RTL } from "../../languages/language/RTL";

const Services = () => {

    const { t } = useTranslation("main");

    return (
        <section className="services" id="services">
            <h2 className="heading">{t(`${mainActiveLang()}.services.our`)} <span>{t(`${mainActiveLang()}.services.services`)}</span></h2>
            <div className={`services-container ${RTL()}`}>
                <ServiceBox logo={<BiCodeAlt />}
                    h3Content={t(`${mainActiveLang()}.services.webdevelopment`)}
                    pContent={t(`${mainActiveLang()}.services.pcontent1`)}
                    readMoreLink="#"
                />

                <ServiceBox logo={<BiPaint />}
                    h3Content={t(`${mainActiveLang()}.services.graphicdesign`)}
                    pContent={t(`${mainActiveLang()}.services.pcontent2`)}
                    readMoreLink="#"
                />

                <ServiceBox logo={<BiLineChart />}
                    h3Content={t(`${mainActiveLang()}.services.digitalmarketing`)}
                    pContent={t(`${mainActiveLang()}.services.pcontent3`)}
                    readMoreLink="#"
                />
            </div>
        </section>
    );
}
export default Services;