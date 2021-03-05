import React from "react";
import Nav from "../Nav"
import About from "../AboutMe"

const Header = ({currentPage, handlePageChange}) => (
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href={<About/>}>Chris Walston</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </nav>
    
    
    
  </header>
);

export default Header;