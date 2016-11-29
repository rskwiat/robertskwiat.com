import React, { Component } from 'react';
import loader from '../../functions/loader.js';

export default class Nav extends Component {

  componentDidMount() {
    loader();
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
