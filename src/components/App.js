import React from 'react';
import WebFont from 'webfontloader';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from 'components/navigation';
import Routes from 'constants/routes';
import Footer from 'components/footer';

WebFont.load({
  google: {
    families: ['Open+Sans:400,600']
  }
});

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        { Routes.map((route, i) => (
          <Route
            key={i}
            exact
            path={route.path}
            component={route.component}
          />
        ))}      
        <Footer copyright="&copy; 2019 Robert Skwiat. Made in NYC"/>
      </div>
    </Router>
  );
}

export default App;
