import React, { Component } from 'react';
import resume from '../resume/JACKIE_AU.pdf';
import { Link } from 'react-scroll';


var prevPageOffset = window.pageYOffset;
window.onscroll = function() {
    var currentPageOffset = window.pageYOffset;
    if(prevPageOffset > currentPageOffset) {
        document.getElementById('navbar-container').style.top = '0';
    } else {
        document.getElementById('navbar-container').style.top = '-5em';
    }
    prevPageOffset = currentPageOffset;
};

export default class Navbar extends Component {

    render(){
        return(
            <div id='navbar-container'>
                <div className='user-select-none' id='element-container'>
                    <Link
                        to='about-container-wrapper'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >
                        <div className='navbar-element'>ABOUT</div>
                    </Link>
                    <a className='navbar-element' href = {resume} 
                        target='_blank' rel='noreferrer'>RESUME</a>
                    <Link
                        to='skills-container-wrapper'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >
                        <div className='navbar-element'>SKILLS</div>
                    </Link>
                    <Link
                        to='portfolio-container-wrapper'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >
                        <div className='navbar-element'>PORTFOLIO</div>
                    </Link>
                    <Link
                        to='contact-container-wrapper'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >
                        <div className='navbar-element'>CONTACT</div>
                    </Link>
                </div>
            </div>
        );
    }
}