import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

const elem = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  elem
);
