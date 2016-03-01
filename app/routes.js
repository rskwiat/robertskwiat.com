import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'


import Nav from './components/partials/nav';

// Pages
import Home from './components/pages/home';
import About from './components/pages/about';
import Work from './components/pages/work';
import NoMatch from './components/pages/error';

export default (
  <Route path="/" component={Nav}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="work" component={Work}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
