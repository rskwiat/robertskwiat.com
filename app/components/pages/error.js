import React, { Component } from 'react';
import loader from '../../functions/loader.js';

class NoMatch extends Component {

  componentDidMount() {
    loader();
  }

  render() {
    return (
      <div className="error">
        <h2>Page Not Found</h2>
        <div>404 error</div>
      </div>
    );
  }
}

export default NoMatch;
