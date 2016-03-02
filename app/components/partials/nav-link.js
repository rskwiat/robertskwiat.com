import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';


export default class NavLink extends Component {
  render(){
    return(
      <li><Link to={this.props.path}>{this.props.name}</Link></li>
    )
  }
}
