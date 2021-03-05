import React, { useState } from 'react';
import PortCard from '../PortCard';
import portfolioFile from '../../assets/json/portfile.json';

const Portfolio = () => {
    return (
        <section className="resume-wrapper" id="portfolio">
            <h2 className="page-title">Portfolio</h2>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {portfolioFile.map(portfolio => (
                        <PortCard
                        id={portfolio.id}
                        key={portfolio.key}
                        name={portfolio.name}
                        image={portfolio.image}
                        github={portfolio.github}
                        deployed={portfolio.deployed}
                    />
                    ))}
                </div>
                
            </div>
        </section>
    )
}
export default Portfolio;
