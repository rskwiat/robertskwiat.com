import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './app';

WebFont.load({
  google: {
    families: ['Open+Sans:400,600']
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
