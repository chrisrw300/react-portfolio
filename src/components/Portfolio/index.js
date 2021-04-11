import React, { useState } from 'react';
import PortCard from '../PortCard';
import frontEnd from '../../assets/json/frontEnd.json';
import backEnd from '../../assets/json/backEnd.json';
import fullStack from '../../assets/json/fullStack.json';

const Portfolio = () => {
    return (
        <section className="resume-wrapper" id="portfolio">
            <h2 className="port-header">Portfolio</h2>
            <button class="port-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Front End Projects <i class="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <div class="collapse" id="collapseExample">
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
                        />
                        ))}
                    </div>
                </div>
            </div>

            <button class="port-btn" type="button" data-bs-toggle="collapse" data-bs-target="#backend" aria-expanded="false" aria-controls="collapseExample">
                Back End Projects <i class="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <div class="collapse" id="backend">
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
                        />
                        ))}
                    </div>
                </div>
            </div>

            <button class="port-btn" type="button" data-bs-toggle="collapse" data-bs-target="#fullstack" aria-expanded="false" aria-controls="collapseExample">
                Full Stack Projects <i class="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <div class="collapse" id="fullstack">
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
                        />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio;
