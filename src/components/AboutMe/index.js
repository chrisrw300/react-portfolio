import React from "react";
import profilePic from "../../assets/img/chris.jpg";
import devRes from "../../assets/resume/walstondevresume.docx";

const AboutMe = () => (
  <section id="about">
    <div className="about-wrapper">
      <div className="left-wrapper">
        <img src={profilePic} alt="my face"></img>
      </div>
      
      <div className="right-wrapper">
        <div class="about-bio">
          <p>
            I am a graduate of the University of Arizona's Full Stack Web Development bootcamp. 
            I love working with Front-End and Back-End technologies to make beautiful, functional
            websites and applications.
          </p>
        </div>
        <a href={devRes} class="resume-download" download>Download My Resume</a>
      </div>
    </div>
    
  </section>
);

export default AboutMe;