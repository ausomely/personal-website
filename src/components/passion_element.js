import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class PassionElement extends Component {
    render() {
        const {
            icon,
            title,
            description
        } = this.props;

        var Icon = icon;

        return(
            <div className='passion-element'>
                <Icon className='passion-icon'/>
                <div className='passion-title'>{title.toUpperCase()}</div>
                <div className='passion-description'>{description}</div>
            </div>
        );
    }
}

PassionElement.propTypes = {
    icon: Proptypes.any,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired
};