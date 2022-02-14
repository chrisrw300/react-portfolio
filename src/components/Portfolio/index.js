import React, { useState } from 'react';
import PortCard from '../PortCard';
import frontEnd from '../../assets/json/frontEnd.json';
import backEnd from '../../assets/json/backEnd.json';
import fullStack from '../../assets/json/fullStack.json';

const Portfolio = () => {
    return (
        <section className="portfolio-wrapper" id="portfolio">
            <h2>Portfolio</h2>

            <div class="portfolio-section ps1">
                <h3>Front End Projects</h3>
                <div className="cards-wrapper">
                    {frontEnd.map(portfolio => (
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
            
            <div class="portfolio-section ps2">
                <h3>Back End Projects</h3>
                <div className="cards-wrapper">
                    {backEnd.map(portfolio => (
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
            
            <div class="portfolio-wrapper ps3">
                <h3>Full Stack Projects</h3>
                <div className="cards-wrapper">
                    {fullStack.map(portfolio => (
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
