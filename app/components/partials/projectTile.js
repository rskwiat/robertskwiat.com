import React, { Component } from 'react';

class ProjectTile extends Component {
  render() {
    return (
      <div className={this.props.classes} id="">
        <h4>{this.props.name}</h4>
        <p>{this.props.company}</p>
        <div className="overlay" />
      </div>
    );
  }
}

export default ProjectTile;
