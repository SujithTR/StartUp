// frontend/src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Import CSS file for header styles

const Header = () => {
  return (
      <header className="header">
          <div className="header-content">
              <div className="startup-info">
                  <h1>Startup Name</h1>
                  <h2>Startup Motto</h2>
              </div>
              <nav>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/programs">Programs</Link></li>
                      <li><Link to="/team">Team</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                  </ul>
              </nav>
          </div>
      </header>
  );
};

export default Header;
