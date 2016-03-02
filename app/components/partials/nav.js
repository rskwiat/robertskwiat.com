import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import Header from './header';
import Footer from './footer';
import NavLink from './nav-link';

export default class Nav extends Component {
  toggleMenu(){
  }

  render(){
    return (
      <div>
        <Header />
           <nav>
              <ul>
                 <NavLink path="/" name="Home" />
                 <NavLink path="/about" name="About" />
                 <NavLink path="/work" name="Work" />
              </ul>
           </nav>
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
