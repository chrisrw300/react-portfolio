import React from "react";

const Resume = () => {
    return(
        <section>
            <h2 className="page-title">Resume</h2>
            <div className="resume-dwnld">
                <a href="#" className="dwnld-btn border-radius">Download My Resume</a>
            </div>
            <div className="res-wrapper">
                <div className="left-res border-radius">
                    <h4 className="res-title">
                        Front End Knowledge
                    </h4>
                    <div className="front-wrapper">
                        <div className="front-lang">
                            <p class="res-category">Languages</p>
                            <ul className="res-list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                        
                        <div className="front-frame">
                            <p class="res-category">Frameworks</p>
                            <ul className="res-list">
                                <li>Bootstrap</li>
                                <li>jQuery</li>
                                <li>React.js</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-res border-radius">
                    <h4 className="res-title">
                        Back End Knowledge
                    </h4>
                    <p class="res-category">Frameworks</p>
                    <ul className="res-list">
                        <li>Express.js</li>
                        <li>mySQL</li>
                        <li>MongoDB</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;