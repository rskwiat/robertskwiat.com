import React from 'react';
import { Link } from 'react-router-dom';

import Routes from 'constants/routes';
import styles from 'scss/navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav} role="navigation">
      <div className="container">
        <ul>
          { Routes.map((route, i) => (
            <li className="nav-item" key={i}><Link to={route.path}>{route.title}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;