import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import NavLink from '../partials/nav-link';

export default class Work extends Component {
  render(){
    return (
      <div>
        <h2>Work</h2>
          <NavLink path="/work/link" name="Link.,.." />


        <div>Some work page content</div>
      </div>
    )
  }
}
