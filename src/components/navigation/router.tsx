import React, { Suspense } from 'react';

import { HashRouter as Routes, Switch, Route } from 'react-router-dom';
import allRoutes from 'constants/routes';

import Home from 'views/home';

const Loading = () => {
  return <div>Loading Screen</div>;
};

interface Props {
  children: object;
}

const Router = ({ children }: Props) => (
  <Routes>
    {children}
    <Suspense fallback={<Loading />}>
      <Switch>
        {allRoutes.map((route) => {
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

        <Route path="/about" component={Home} />
      </Switch>
    </Suspense>
  </Routes>
);

export default Router;
