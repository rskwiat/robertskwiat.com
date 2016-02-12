import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import AppStore from './stores/AppStore';

import App from './components/app';

import Home from './components/pages/home';
import About from './components/pages/about';
import Work from './components/pages/work';
import WorkDetail from './components/pages/work-detail';
import Contact from './components/pages/contact';
import NoMatch from './components/partials/nomatch';

const data = AppStore.data;

export default(
    <Route path="/" component={App}>
      <IndexRoute component={Home} data={data}/>
      <Route path="about" component={About} data={data}/>
      <Route path="work" component={Work}/>
      <Route path="work/:detail" component={WorkDetail} data={data}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={NoMatch}/>
    </Route>
)
