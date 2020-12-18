import React from 'react';

function Nav() {
  return (
    <header>
      <nav className="nav-wrapper">
        <ul className="link-wrapper">
          <a data-testid="about" href="#about" className="link">
            About me
          </a>
          <a data-testid="portfolio" href="#portfolio" className="link">
            Portfolio
          </a>
        </ul>
      </nav>

      <h2 className="nav-header">
        Chris Walston
      </h2>

      <nav className="nav-wrapper">
        <ul className="link-wrapper">
          <a data-testid="contact" href="#contact" className="link">
            Contact
          </a>
          <a data-testid="resume" href="#resume" className="link">
            Resume
          </a>
        </ul>
      </nav>
    </header>
  );
}


export default Nav;