import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';


export default class NavLink extends Component {
  render(){
    return(
      <li><Link to={this.props.path} onClick={this.props.event}>{this.props.name}</Link></li>
    )
  }
}
