import React from "react";
import profilePic from "../../assets/img/chris.jpg";

const AboutMe = () => (
  <section>
    <h2 className="page-title">About Me</h2>
    <div className="about-wrapper">
    <div className="left-wrapper">
      <img src={profilePic} alt="my face" class="border-radius shadow"></img>
    </div>
  
    <div className="right-wrapper">
        <div class="about-bio shadow border-radius">
          <p>
            I'm a student of the University of Arizona Fullstack Developer bootcamp. 
            Learning more about how web technologies work is a hobby that I want to turn into my lifelong career. 
            I love to make websites on my spare time and experiment with different layouts and functionalities. 
            Although my journey of learning was tough, I came out strong with knowledge I've wanted to achieve. 
            As I advance through my career, I will adopt new ways of coding as well as new languages to help me create more.
          </p>
        </div>
      </div>
    </div>
    
  </section>
);

export default AboutMe;