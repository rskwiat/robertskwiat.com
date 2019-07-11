import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'scss/navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;