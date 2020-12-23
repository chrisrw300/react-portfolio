import React, { useState } from 'react';
import PortCard from '../PortCard';
import portfolioFile from '../../assets/json/portfile.json';

const Portfolio = () => {
    return (
        <section>
            <h2 className="page-title">Portfolio</h2>
            <div className="cards-wrapper">
                {portfolioFile.map(portfolio => (
                    <PortCard
                    id={portfolio.id}
                    key={portfolio.key}
                    name={portfolio.name}
                    image={portfolio.image}
                />
                ))}
            </div>
        </section>
    )
}
export default Portfolio;
