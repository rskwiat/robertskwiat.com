import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from 'constants/routes';
import NavStyles from './styles/NavStyles';

const Nav = () => {
  const location = useLocation();
  return (
    <NavStyles>
      {Routes.map((route) => {
        return route.path ? (
          <Link
            key={route.title}
            className={route.path === location.pathname ? 'active' : null}
            to={route.path}
          >
            {route.title}
          </Link>
        ) : null;
      })}
    </NavStyles>
  );
};

export default Nav;
