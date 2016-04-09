import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import Nav from '../components/partials/nav';
import Home from '../components/pages/home';
import WorkDetail from '../components/pages/work-detail';
import NoMatch from '../components/pages/error';


export default (
  <Route path="/" component={Nav}>
    <IndexRoute component={Home}/>
    <Route path="work/:id" component={WorkDetail}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
