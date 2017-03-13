import React, { Component } from 'react';

class NoMatch extends Component {
  
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
