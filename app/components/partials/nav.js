import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

export default class Nav extends Component {

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
