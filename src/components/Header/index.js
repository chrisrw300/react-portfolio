import React from "react";
import Nav from "../Nav"
import About from "../AboutMe"

const Header = ({currentPage, handlePageChange}) => (
  <header>
    <h2 className="nav-header">
      <a href={<About/>}>Chris Walston</a>
    </h2>
    
    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
  </header>
);

export default Header;