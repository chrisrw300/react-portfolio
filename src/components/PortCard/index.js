import React from 'react';

function PortCard(props) {
    return (
        
        <div className="cards">
            <div>
                <img src={props.image} alt="portfolio image"/>
                <div className="cards-body">
                    <p>{props.name}</p>
                    <a href={props.github} target="_blank" class="btn"><i class="fa fa-github" aria-hidden="true"></i> Repo</a>
                    <a href={props.deployed} target="_blank" rel='noreferrer' class="btn"><i class="fa fa-television" aria-hidden="true"></i> Live</a>
                </div>
            </div>
        </div>
    );
}

export default PortCard;