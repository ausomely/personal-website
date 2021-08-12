import React, { Component } from 'react';
import { Link } from 'react-scroll';

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
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">ABOUT</a></li>
                                <li><a href="#">RESUME</a></li>
                                <li><a href="#">SKILLS</a></li>
                                <li><a href="#">PORTFOLIO</a></li>
                                <li><a href="#">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}