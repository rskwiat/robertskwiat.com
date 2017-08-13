import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './app';

WebFont.load({
  google: {
    families: ['Open+Sans:400,600']
  }
});

const target = document.getElementById('root');

const app = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(app, target);
