import React from 'react';

function Nav(props) {
  const navTabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <header>
      <h2 className="nav-header">
        Chris Walston
      </h2>

      <nav className="nav-wrapper">
        <ul className="link-wrapper">
          {navTabs.map(navTabs => {
            <li className="link" key={navTabs}>
              <a 
              href={'#' + navTabs.toLowerCase()}
              onClick={() => props.handlePageChange(navTabs)}>
                {navTabs}
              </a>
            </li>
          })}
          {/* <a data-testid="about" href="#about" className="link">
            About me
          </a>
          <a data-testid="portfolio" href="#portfolio" className="link">
            Portfolio
          </a>
          <a data-testid="contact" href="#contact" className="link">
            Contact
          </a>
          <a data-testid="resume" href="#resume" className="link">
            Resume
          </a> */}
        </ul>
      </nav>
    </header>
  );
}


export default Nav;