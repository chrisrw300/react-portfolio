import React, { useState } from 'react';
import PortCard from '../PortCard';
import frontEnd from '../../assets/json/frontEnd.json';
import backEnd from '../../assets/json/backEnd.json';
import fullStack from '../../assets/json/fullStack.json';

const Portfolio = () => {
    return (
        <section className="resume-wrapper" id="portfolio">
            <h3 className="port-header">Front-End Projects</h3>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {frontEnd.map(portfolio => (
                        <PortCard
                        id={portfolio.id}
                        key={portfolio.key}
                        name={portfolio.name}
                        image={portfolio.image}
                        github={portfolio.github}
                        deployed={portfolio.deployed}
                        code1={portfolio.code1}
                        code2={portfolio.code2}
                        code3={portfolio.code3}
                        code4={portfolio.code4}
                    />
                    ))}
                </div>
            </div>
            <h3 className="port-header">Back-End Projects</h3>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {backEnd.map(portfolio => (
                        <PortCard
                        id={portfolio.id}
                        key={portfolio.key}
                        name={portfolio.name}
                        image={portfolio.image}
                        github={portfolio.github}
                        deployed={portfolio.deployed}
                        code1={portfolio.code1}
                        code2={portfolio.code2}
                        code3={portfolio.code3}
                        code4={portfolio.code4}
                    />
                    ))}
                </div>
            </div>
            <h3 className="port-header">Full Stack Projects</h3>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {fullStack.map(portfolio => (
                        <PortCard
                        id={portfolio.id}
                        key={portfolio.key}
                        name={portfolio.name}
                        image={portfolio.image}
                        github={portfolio.github}
                        deployed={portfolio.deployed}
                        code1={portfolio.code1}
                        code2={portfolio.code2}
                        code3={portfolio.code3}
                        code4={portfolio.code4}
                        code5={portfolio.code5}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Portfolio;
