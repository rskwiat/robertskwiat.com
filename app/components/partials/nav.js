import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import Header from './header';
import Footer from './footer';
import NavLink from './nav-link';
import NavButton from './nav-button';

export default class Nav extends Component {

  toggleMenu(){
    let toggleMenu = document.getElementById('toggle');
    let menu = document.querySelectorAll('nav ul')[0];

    toggleMenu.classList.toggle('x');
    menu.classList.toggle('open');
  }

  componentDidMount() {
  }

  render(){
    return (
      <div>
         <nav >
           <NavButton event={this.toggleMenu.bind() }/>
            <ul>
               <NavLink path="/" name="Home" />
               <NavLink path="/about" name="About" />
               <NavLink path="/work" name="Work" />
            </ul>
         </nav>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
