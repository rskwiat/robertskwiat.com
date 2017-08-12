import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './views/home';
import NotFound from './views/notFound';
import Resume from './views/resume';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
