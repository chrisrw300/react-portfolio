import React from "react";

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="port-header-alt">Skills</h2>
            <h4 className="skill-header">Front-End Skills</h4>
            <div className="container-fluid icon-wrapper">
                <i className="icon devicon-html5-plain-wordmark"></i>
                <i className="icon devicon-css3-plain-wordmark"></i>
                <i className="icon devicon-javascript-plain"></i>
                <i className="icon devicon-react-original-wordmark"></i>
                <i className="icon devicon-bootstrap-plain-wordmark"></i>
                <i className="icon devicon-jquery-plain-wordmark"></i>
            </div>

            {/* <div>
                <h4 className="skill-header">Back-End Skills</h4>
                <i className="icon devicon-mongodb-plain-wordmark  "></i>
                <i className="icon devicon-express-original-wordmark"></i>
                <i className="icon devicon-nodejs-plain-wordmark  "></i>
                <i className="icon devicon-mysql-plain-wordmark"></i>
                <i className="icon devicon-sequelize-plain-wordmark"></i>
                <i className="icon devicon-handlebars-plain-wordmark  "></i>
            </div> */}

            <h4 className="skill-header">Technology Skills</h4>
            <div className="container-fluid icon-wrapper">
                <i className="icon devicon-git-plain-wordmark"></i>
                <i className="icon devicon-heroku-original-wordmark"></i>
                <i className="icon devicon-npm-original-wordmark"></i>
                <i className="icon devicon-visualstudio-plain-wordmark"></i>
                <i className="icon devicon-apple-original"></i>
                <i className="icon devicon-windows8-original"></i>
            </div>
        </section>
    )
}

export default Skills;