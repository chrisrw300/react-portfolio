import React from 'react';

function Nav(props) {
  const navTabs = ['About Me', 'Portfolio', 'Contact', 'Resume' ];
  
  return (
    <nav className="nav-wrapper">
      <ul className="link-wrapper">
      {navTabs.map(tab => (
        <li key={tab}>
          <a href={'#' + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)} className="link">
            {tab}
          </a>
        </li>
      ))}
      </ul>
    </nav>
  );
}

export default Nav;
