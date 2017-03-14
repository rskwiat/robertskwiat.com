import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul><Link to="/">Home</Link></ul>
    <ul><Link to="/resume">Resume</Link></ul>
  </nav>
);

export default Navigation;
