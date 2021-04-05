import React from 'react';
import PropTypes from 'prop-types';

export default function SkillElement( { icon, name } ) {
    var Icon = icon;
    return(
        <div className='skills-element'>
            <Icon className='skills-icon'/>
            <div className='skills-name'>{name}</div>
        </div>
    );
}

SkillElement.propTypes = {
    icon: PropTypes.IconType,
    name: PropTypes.string.isRequired
};