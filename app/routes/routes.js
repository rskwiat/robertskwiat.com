import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import Nav from '../components/partials/nav';
import Home from '../components/pages/home';
import NoMatch from '../components/pages/error';
import Resume from '../components/pages/resume';


export default (
  <Route path="/" component={Nav}>
    <IndexRoute component={Home}/>
    <Route path="/resume" component={Resume} />
    <Route path="*" component={NoMatch}/>
  </Route>
)
