import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="container container-column" role="banner">
          <div className="profile profile-img" />
          <h1 className={this.props.id}>{this.props.name}</h1>
        </header>
    );
  }
}

export { Header };
