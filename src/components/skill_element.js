import React from 'react';
import PropTypes from 'prop-types';

export default function SkillElement( { icon, name } ) {

    return(
        <div className='skills-element'>
            <div className='skills-icon'>{icon}</div>
            <div className='skills-name'>{name}</div>
        </div>
    );
}

SkillElement.propTypes = {
    icon: PropTypes.any,
    name: PropTypes.string.isRequired
};