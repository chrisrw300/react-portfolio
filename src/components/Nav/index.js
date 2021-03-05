import React from 'react';

function Nav(props) {
  const navTabs = ['About', 'Portfolio', 'Skills', 'Contact' ];
  
  return (
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        {navTabs.map(tab => (
        <li key={tab} className="nav-item">
          <a 
            href={'#' + tab.toLowerCase()} 
            className="nav-link text-white">
              {tab}
          </a>
        </li>
      ))}
      </ul>
    </div>
    
  );
}

export default Nav;
