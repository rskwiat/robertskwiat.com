import React, { Component } from 'react';
import Copyright from '../partials/copyright';

class Footer extends Component {
  render() {
    return (
      <footer role="contentinfo">
        <div className="container">
          <Copyright />
        </div>
      </footer>
    );
  }
}

export { Footer };
