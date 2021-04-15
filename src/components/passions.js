import React from 'react';
import PassionElement from './passion_element';
import passion_list from '../assets/passion_list';

export default function Passions() {
    return(
        <div id='passion-container-wrapper'>
            <div id='passion-container'>
                <div id='passion-header' data-aos='fade-right' data-aos-duration='1300' data-aos-once='false'>Passions</div>
                <div id='passion-map' data-aos='fade-left' data-aos-duration='1300' data-aos-once='false'>
                    {
                        passion_list.map((passion, index) => {
                            return <PassionElement key={index} icon={passion.icon} title={passion.title} description={passion.description}/>;
                        })
                    }  
                </div> 
            </div>
        </div>
    );
}