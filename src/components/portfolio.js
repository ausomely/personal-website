import React from 'react';
import PortfolioElement from './portfolio_element';
import portfolio_list from '../assets/portfolio_list';

export default function Portfolio() {
    return(
        <div id='portfolio-container-wrapper'>
            <div id='portfolio-header' data-aos='fade-up' data-aos-duration='1300' data-aos-once='false'>Portfolio</div>
            <div id='portfolio-container'>
                <div id='projects-map' data-aos='fade-up' data-aos-duration='1300' data-aos-once='false'>
                    {
                        portfolio_list.map((project, index) => {
                            return (
                                <PortfolioElement key={index} 
                                    name={project.name} description={project.description} 
                                    img={project.img_src} url={project.url_link} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );

}