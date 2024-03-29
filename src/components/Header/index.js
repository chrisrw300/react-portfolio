import React from "react";
import Nav from "../Nav"
import About from "../AboutMe"
import profilePic from "../../assets/img/chris.jpg";

const Header = ({currentPage, handlePageChange}) => (
  <header>
    {/* <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href={<About/>}>Chris Walston</a>
        <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </nav> */}

    <nav>
      <img src={profilePic}></img>
      <ul>
        <li>
          <h2>Chris Walston</h2>
        </li>
        <li>
          <p>
            I am currently on the road to becoming a junior front end developer. 
            Please take some time and check out my portfolio work. 
            Don't hesitate to contact me regarding questions or any job openings.
          </p>
        </li>
        <li class="icons">
          <a href="https://www.linkedin.com/in/christopher-walston-a18614175/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </li>
        <li class="icons">
          <a href="https://github.com/chrisrw300" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        </li>
        <li class="icons">
          <a href="mailto:chrisrw300@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        </li>
      </ul>
      <hr />
      <ul class="skills">
        <li>
            <i className="icon devicon-html5-plain-wordmark"></i>
            <i className="icon devicon-css3-plain-wordmark"></i>
            <i className="icon devicon-javascript-plain"></i>
            <i className="icon devicon-react-original-wordmark"></i>
            <i className="icon devicon-bootstrap-plain-wordmark"></i>
            <i className="icon devicon-jquery-plain-wordmark"></i>
        </li>
      </ul>
    </nav>
    
    
    
  </header>
);

export default Header;