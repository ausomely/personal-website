import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default class PortfolioElement extends Component {

    render() {
        const {
            name,
            description,
            img,
            url
        } = this.props;
        
        return (
            <div className='project-element' style={ {backgroundImage: 
                'url(' + img + ')'} }>
                <a href={url} target='_blank' rel='noreferrer'>
                    <div className='project-cover'>
                        <div className='project-content'>
                            <div className='project-name'>{name}</div>
                            <p className='project-description'>{description}</p>
                        </div>
                        <p className='visit-project'> Visit Project <FaLongArrowAltRight id='right-arrow' /></p>
                    </div>
                </a>
            </div>
        );
    }    
}


PortfolioElement.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};