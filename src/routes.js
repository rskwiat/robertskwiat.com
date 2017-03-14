
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/home';
import NotFound from './components/notFound';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
