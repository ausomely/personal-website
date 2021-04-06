import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                <a href={url} target='_blank' rel='noreferrer'></a>
                <div className='project-name'>{name}</div>
                <p className='project-description'>{description}</p>
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