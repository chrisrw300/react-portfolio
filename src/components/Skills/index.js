import React from "react";
import Nav from "../Nav";

const Skills = () => {
    return(
    
        <section id="skills">
            <h2 className="page-title page-title-alt">Skills</h2>
            <div className="resume-dwnld">
                <a href="#" className="dwnld-btn border-radius">Download My Resume</a>
            </div>
            <div className="container-fluid icon-wrapper">
                <div>
                    <h4 className="skill-header">Front-End Skills</h4>
                    <i className="icon devicon-html5-plain-wordmark"></i>
                    <i className="icon devicon-css3-plain-wordmark"></i>
                    <i className="icon devicon-javascript-plain"></i>
                    <i className="icon devicon-react-original-wordmark"></i>
                    <i className="icon devicon-bootstrap-plain-wordmark"></i>
                    <i className="icon devicon-jquery-plain-wordmark"></i>
                </div>

                <div>
                    <h4 className="skill-header">Back-End Skills</h4>
                    <i className="icon devicon-mongodb-plain-wordmark"></i>
                    <i className="icon devicon-express-original-wordmark"></i>
                    <i className="icon devicon-nodejs-plain-wordmark"></i>
                    <i className="icon devicon-mysql-plain-wordmark"></i>
                    <i className="icon devicon-sequelize-plain-wordmark"></i>
                    <i className="icon devicon-handlebars-plain-wordmark"></i>
                </div>

                <div>
                    <h4 className="skill-header">Technology Skills</h4>
                    <i className="icon devicon-git-plain-wordmark"></i>
                    <i className="icon devicon-heroku-original-wordmark"></i>
                    <i className="icon devicon-npm-original-wordmark"></i>
                    <i className="icon devicon-visualstudio-plain-wordmark"></i>
                    <i className="icon devicon-apple-original"></i>
                    <i className="icon devicon-windows8-original"></i>
                </div>
            </div>
        </section>
    )
}

export default Skills;