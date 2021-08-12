import React, { Component } from 'react';
import { Link } from 'react-scroll';
import resume from '../resume/JACKIE_AU_PLAIN.pdf';

export default class NavbarHome extends Component {
    render() {
        return(
            <div className="menu-wrap">
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
                                    <div className='navbar-element'>ABOUT</div>
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
                                    <div className='navbar-element'>SKILLS</div>
                                </Link></li>
                                <li><Link
                                    to='portfolio-container-wrapper'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    <div className='navbar-element'>PORTFOLIO</div>
                                </Link></li>
                                <li><Link
                                    to='contact-container-wrapper'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    <div className='navbar-element'>CONTACT</div>
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}