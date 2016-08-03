import React, { Component } from 'react';

export default class ProjectTile extends Component {
  render(){
    return (
      <div className="inner gallery-item" id={this.props.id}>
        <h4>{this.props.name}</h4>
        <p>{this.props.company}</p>
        <div className="overlay"></div>
      </div>
    )
  }
}