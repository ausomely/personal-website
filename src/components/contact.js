import React from 'react';
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';

export default function Contact() {
    
    return(
        <div id='contact-container-wrapper'>
            <div id='contact-container'>
                <div id='contact-header' data-aos='fade-right' data-aos-duration='1300' data-aos-once='true'>Get in touch.</div>
                <div id='contact-content' data-aos='fade-right' data-aos-duration='1300' data-aos-once='false'>
                    <a id='email' href='mailto:jaackieau@gmail.com'>jaackieau@gmail.com</a>
                    <a id='phone' href='tel:+1.916.813.9097'>+1.916.813.9097</a>
                    <div id='contact-icons-container'>
                        <a href='https://www.linkedin.com/in/jackie-au/' target='_blank' rel='noreferrer'><FaLinkedin className='contact-icon' /></a>
                        <a href='https://github.com/ausomely' target='_blank' rel='noreferrer'><FaGithubSquare className='contact-icon' /></a>
                        <a href='https://www.instagram.com/ausomely/' target='_blank' rel='noreferrer'><FaInstagramSquare className='contact-icon' /></a>
                    </div>
                </div>
            </div>
        </div>
    );

}