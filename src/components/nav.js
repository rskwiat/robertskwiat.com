import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Routes } from 'constants/routes';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: ${(props) => props.theme.gray};
  position: relative;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

  a {
    display: inline-block;
    padding: 2rem 1rem;
    color: ${(props) => props.theme.white};
    font-size: 1.6rem;
    transition: background 350ms ease-in-out;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    &.active {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

const Nav = () => {
  const location = useLocation();
  console.log(location);
  return (
    <NavBar>
      <div className="container">
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
      </div>
    </NavBar>
  );
};

export default Nav;
