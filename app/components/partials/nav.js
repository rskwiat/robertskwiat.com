
import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import Header from './header';

// Main component
export default class App extends Component {
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (
      <div>
        <Header />
           <nav>
           <p>in secondary nav file</p>
              <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/work">Work</Link></li>
                 <li><Link to="/contact">Contact</Link></li>
              </ul>
           </nav>
        { this.props.children }
      </div>
    )
  }
}
