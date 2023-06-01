import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import { BsLinkedin, BsFillTelephoneFill, BsGithub, BsGlobe } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";

const Header = () => {
    return (
        <header className='cv-header'>
            <React.Fragment>
                <h1 id='cv-myname'>Mostafa Saleh</h1>
                <h3 id='cv-myjob'>Software Engineer</h3>
            </React.Fragment>
            <div className='links-container'>
                <div className='personal-info'>
                    <div>
                        <div><FaBirthdayCake /> 30/7/1999</div>
                        <div><IoHomeSharp /> Tanta, Egypt</div>
                    </div>
                </div>
                <div className='links'>
                    <Link to="mailto:most.saleh@hotmail.com" target='_blank' rel='noreferrer'><div><GrMail /> most.saleh@hotmail.com</div></Link>
                    <Link to="tel:+201140855227" target='_blank' rel='noreferrer'><div><BsFillTelephoneFill /> +201140855227</div></Link>
                    <Link to="https://linkedin.com/in/mostafasaleh5" target='_blank' rel='noreferrer'><div><BsLinkedin /> mostafasaleh5</div></Link>
                    <Link to="https://github.com/mostafasaleh1" target='_blank' rel='noreferrer'><div><BsGithub /> mostafasaleh1</div></Link>
                    <Link to="https://mostafasaleh1.github.io/myprofile" target='_blank' rel='noreferrer'><div><BsGlobe /> mostafasaleh1.github.io/myprofile</div></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;