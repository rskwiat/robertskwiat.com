import React from 'react';
import WebFont from 'webfontloader';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Navigation from 'components/navigation';
import Contact from 'components/contact';
import Footer from 'components/footer';
import Routes from 'constants/routes';

const customHistory = createBrowserHistory();


WebFont.load({
  google: {
    families: ['Open+Sans:400,600']
  }
});

const App = () => {
  return (
    <Router history={customHistory}>
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

        <Contact title="Contact and Questions" />        
        <Footer copyright="&copy; 2019 Robert Skwiat. Made in NYC"/>
      </div>
    </Router>
  );
}

export default App;
