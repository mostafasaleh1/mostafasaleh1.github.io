import React from "react";
import "./services.css";
import { mainActiveLang } from "../../languages/language/ActiveLang";
import { useTranslation } from "react-i18next";

const ServiceBox = (props) => {

    const { t } = useTranslation("main");

    return (
        <div className="services-box">
            {props.logo}
            <h3>{props.h3Content}</h3>
            <p>{props.pContent}</p>
            <a href={props.readMoreLink} className="btn" type="button" title={t(`${mainActiveLang()}.services.button`)}>{t(`${mainActiveLang()}.services.button`)}</a>
        </div>
    );
}
export default ServiceBox;