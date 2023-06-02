import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

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

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>
            <form action='#' ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                    <input type="text" placeholder="Full Name" name='from_name' title='Enter your full name' />
                    <input type="email" placeholder="Email Address" name='email' title='Enter your email here' />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Mobile Number" name='phone' title='Enter your phone number here' />
                    <input type="text" placeholder="Email Subject" name='subject' title="Enter what's this message is going to be about" />
                </div>
                <textarea name="message" id="text-area" cols="30" rows="10" placeholder="Your Message" style={{ resize: "none" }} title='Type down your message here'></textarea>
                <input type="submit" value="Send Message" className="btn" title='Send me an email' />
            </form>
        </section>
    );
}
export default Contact;