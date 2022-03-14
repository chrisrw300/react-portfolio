import React from 'react';

function PortCard(props) {
    return (
        
        <div className="cards">
            <div>
                <div className="cards-body">
                    <p>{props.name}</p>
                    <img src={props.image} alt="portfolio image"/>
                    <a href={props.github} target="_blank" class="btn"><i class="fa fa-github" aria-hidden="true"></i> Repo</a>
                    <a href={props.deployed} target="_blank" class="btn"><i class="fa fa-television" aria-hidden="true"></i> Live</a>
                </div>
            </div>
        </div>
    );
}

export default PortCard;