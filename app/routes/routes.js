import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import Nav from '../components/partials/nav';

// Pages
import Home from '../components/pages/home';
import Work from '../components/pages/work';
import Contact from '../components/pages/contact';
import WorkDetail from '../components/pages/work-detail';
import NoMatch from '../components/pages/error';


export default (
  <Route path="/" component={Nav}>
    <IndexRoute component={Home}/>
    <Route path="work" component={Work}/>
    <Route path="work/:id" component={WorkDetail}/>
    <Route path="contact" component={Contact} />
    <Route path="*" component={NoMatch}/>
  </Route>
)
