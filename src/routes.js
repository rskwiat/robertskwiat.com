import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Resume from './pages/resume';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
