import React, { Suspense } from 'react';
import WebFont from 'webfontloader';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from 'components/loading';
import { Theme } from 'theme/createTheme';
import { Routes } from 'constants/routes';

import Nav from 'components/nav';
WebFont.load({
  google: {
    families: ['Open+Sans:400,600'],
  },
});

const App = () => {
  return (
    <Router>
      <Theme>
        <Suspense fallback={<Loading />}>
          <Nav />
          <Switch>
            {Routes.map((route) => {
              return route.path ? (
                <Route
                  key={route.title}
                  path={route.path}
                  exact
                  component={route.component}
                />
              ) : (
                <Route key={route.title} component={route.component} />
              );
            })}
          </Switch>
        </Suspense>
      </Theme>
    </Router>
  );
};

export default App;
