import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import Copyright from '../partials/copyright';

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <div className="container">
          <Copyright />
        </div>
      </footer>
    )
  }
}
