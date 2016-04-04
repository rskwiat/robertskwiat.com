import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

export default class Icon extends Component {
  render(){
    return (
      <a className={this.props.icon} title={this.props.title} href={this.props.link} target="_blank"></a>
    )
  }
}
