import React from 'react';
import WebFont from 'webfontloader';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from 'components/navigation';
import Contact from 'components/contact';
import Footer from 'components/footer';
import Routes from 'constants/routes';

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

        <Contact title="Contact and Questions" />        
        <Footer copyright="&copy; 2019 Robert Skwiat. Made in NYC"/>
      </div>
    </Router>
  );
}

export default App;
