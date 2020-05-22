import React from 'react';
import Theme from 'theme/createTheme';
import Navigation from './navigation';
import Router from './navigation/router';

const App = () => (
  <Theme>
    <Router>
      <Navigation />
    </Router>
  </Theme>
);

export default App;
