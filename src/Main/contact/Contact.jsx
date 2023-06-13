import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { useTranslation } from 'react-i18next';
import { mainActiveLang } from '../../languages/language/ActiveLang';
import { RTL } from "../../languages/language/RTL";
import { onlyText_RTL } from '../../languages/language/RTL';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bugcxhd', 'template_gg0bfq4', form.current, 'BVRhTT-DBkT3hDcnl')
            .then(() => {
                alert("Message Sent");
            }, (error) => {
                alert(error.text);
            });
    };

    const { t } = useTranslation("main");

    return (
        <section className="contact home-section" id="contact">
            <h2 className="heading">{t(`${mainActiveLang()}.contact.contact`)} <span>{t(`${mainActiveLang()}.contact.me`)}</span></h2>
            <form action='#' ref={form} onSubmit={sendEmail}>
                <div className={`input-box ${RTL()}`}>
                    <input type="text" placeholder={t(`${mainActiveLang()}.contact.fullname`)} name='from_name' title={t(`${mainActiveLang()}.contact.fullnametitle`)} className={onlyText_RTL()} />
                    <input type="email" placeholder={t(`${mainActiveLang()}.contact.emailaddress`)} name='email' title={t(`${mainActiveLang()}.contact.emailaddresstitle`)} className={onlyText_RTL()} />
                </div>
                <div className={`input-box ${RTL()}`}>
                    <input type="number" placeholder={t(`${mainActiveLang()}.contact.mobilenumber`)} name='phone' title={t(`${mainActiveLang()}.contact.mobilenumbertitle`)} className={onlyText_RTL()} />
                    <input type="text" placeholder={t(`${mainActiveLang()}.contact.subject`)} name='subject' title={t(`${mainActiveLang()}.contact.subjecttitle`)} className={onlyText_RTL()} />
                </div>
                <textarea name="message" id="text-area" cols="30" rows="10" placeholder={t(`${mainActiveLang()}.contact.yourmessage`)} style={{ resize: "none" }} title={t(`${mainActiveLang()}.contact.yourmessagetitle`)} className={onlyText_RTL()}></textarea>
                <input type="submit" value={t(`${mainActiveLang()}.contact.button`)} className="btn" title={t(`${mainActiveLang()}.contact.buttontitle`)} />
            </form>
        </section>
    );
}
export default Contact;