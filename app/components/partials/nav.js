import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

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
        { this.props.children }
      </div>
    )
  }
}



/*

<!--
 <nav>
   <NavButton event={this.toggleMenu.bind() }/>
    <ul>
       <NavLink path="/" name="About" event={this.toggleMenu.bind()} />
       <NavLink path="/skills" name="Skills" event={this.toggleMenu.bind()} />
       <NavLink path="/work" name="Work" event={this.toggleMenu.bind()} />
    </ul>
 </nav> -->

 */
