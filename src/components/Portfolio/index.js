import React, { useState } from 'react';
import PortCard from '../PortCard';
import frontEnd from '../../assets/json/frontEnd.json';
import backEnd from '../../assets/json/backEnd.json';
import fullStack from '../../assets/json/fullStack.json';
import portcards from '../../assets/json/portcards.json'

const Portfolio = () => {
    return (
        <section className="portfolio-wrapper" id="portfolio">
            <h2>Portfolio</h2>

            <div class="portfolio-section ps1">
                <div className="cards-wrapper">
                    {portcards.map(portfolio => (
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
