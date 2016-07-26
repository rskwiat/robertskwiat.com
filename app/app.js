import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createHistory } from 'history';
import routes from './routes/routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Routes = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      { routes }
    </Router>
  </Provider>
)

const app = document.getElementById('app')
ReactDOM.render(Routes, app)
