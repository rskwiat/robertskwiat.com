
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/home';
import NotFound from './components/notFound';
import Resume from './components/resume';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
