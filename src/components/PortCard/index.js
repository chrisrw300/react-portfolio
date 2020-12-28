import React from 'react';

function PortCard(props) {
    return (
        
        <div className="card-wrapper">
            <div className="card border-radius">
                <div className="card-title">
                    <p>{props.name}</p>
                </div>
                <div className="card-img border-radius">
                    <img src={props.image} alt="portfolio image"/>
                </div>
                <div className="card-body">
                    <div className="card-link">
                        <a href={props.github} target="_blank"><i class="fa fa-github" aria-hidden="true"></i> Repo</a>
                        <a href={props.deployed} target="_blank"><i class="fa fa-television" aria-hidden="true"></i> Live</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortCard;