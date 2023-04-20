import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bugcxhd', 'template_gg0bfq4', form.current, 'BVRhTT-DBkT3hDcnl')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
            });
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>
            <form action='#' ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                    <input type="text" placeholder="Full Name" name='from_name' />
                    <input type="email" placeholder="Email Address" name='email' />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Mobile Number" name='phone' />
                    <input type="text" placeholder="Email Subject" name='subject' />
                </div>
                <textarea name="message" id="text-area" cols="30" rows="10" placeholder="Your Message" style={{ resize: "none" }}></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    );
}
export default Contact;