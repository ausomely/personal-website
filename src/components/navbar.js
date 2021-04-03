import React from 'react';
import resume from '../resume/JACKIE_AU_PLAIN.pdf';

// TODO:: on click handler

export default class Navbar extends React.Component {
    render(){
        return(
            <div>
                <div className='navbar-container'>
                    <div className='element-container user-select-none'>
                        <div className='navbar-element'>ABOUT</div>
                        <a className='navbar-element' href = {resume} target='_blank' rel='noreferrer'>RESUME</a>
                        <div className='navbar-element'>SKILLS</div>
                        <div className='navbar-element'>PORTFOLIO</div>
                        <div className='navbar-element'>CONTACT</div>
                    </div>
                </div>
            </div>
        );
    }
}