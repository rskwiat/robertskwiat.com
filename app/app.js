import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createHistory } from 'history';
import routes from './routes/routes';

const Routes = (
  <Router history={browserHistory}>
    { routes }
  </Router>
)

const app = document.getElementById('app')
ReactDOM.render(Routes, app)
