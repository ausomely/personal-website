import React, { Component } from 'react';
import { Link } from 'react-scroll';
import resume from '../resume/JACKIE_AU.pdf';


const closeOverlay = function() {
    document.getElementsByClassName('toggler')[0].checked = false;
};

export default class NavbarHome extends Component {
    render() {
        return(
            <div className="menu-wrap" id="hamburger-menu">
                <input type="checkbox" className="toggler" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><a className='navbar-element' href = "/"
                                    target='_self' rel='noreferrer'>HOME</a></li>
                                <li><Link
                                    to='about-container-wrapper'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    <div className='navbar-element' onClick={closeOverlay}>ABOUT</div>
                                </Link></li>
                                <li><a className='navbar-element' href = {resume} 
                                    target='_blank' rel='noreferrer'>RESUME</a></li>
                                <li><Link
                                    to='skills-container-wrapper'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    <div className='navbar-element' onClick={closeOverlay}>SKILLS</div>
                                </Link></li>
                                <li><Link
                                    to='portfolio-container-wrapper'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    <div className='navbar-element' onClick={closeOverlay}>PORTFOLIO</div>
                                </Link></li>
                                <li><Link
                                    to='contact-container-wrapper'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    <div className='navbar-element' onClick={closeOverlay}>CONTACT</div>
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}