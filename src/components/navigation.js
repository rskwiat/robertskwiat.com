import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
