import React, { Suspense } from 'react';

import { HashRouter as Routes, Switch, Route } from 'react-router-dom';
import allRoutes from 'constants/routes';

const Loading = () => <div>Loading Screen</div>;

interface Props {
  children: object;
}

const Router = ({ children }: Props) => (
  <Routes>
    {children}
    <Suspense fallback={<Loading />}>
      <Switch>
        {allRoutes.map((route) => {
          if (route.path) {
            return (
              <Route
                key={route.title}
                path={route.path}
                exact
                component={route.component}
              />
            );
          }
          return <Route key={route.title} component={route.component} />;
        })}
      </Switch>
    </Suspense>
  </Routes>
);

export default Router;
