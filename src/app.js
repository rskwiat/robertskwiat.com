import React from 'react';
import routes from './routes';
import Navigation from './components/navigation';
import Footer from './components/footer';

import './css/app.css';

const App = () => (
  <div className="app">
    <Navigation />
    { routes }
    <Footer copyright="&copy; Robert Skwiat. Made in NYC" />
  </div>
);

export default App;
