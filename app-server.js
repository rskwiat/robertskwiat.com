// server.js

import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Router, match, RouterContext, RoutingContext, IndexRoute } from 'react-router';
import routes from './app/routes/routes';

const app = express();
const port = 4500;

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    var content = ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps}/>);
      res.render('index.ejs', {html: content});
  });
});

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.sendFile('public/robots.txt');
});

app.get('/humans.txt', function (req, res) {
  res.type('text/plain');
  res.sendFile('public/humans.txt');
});

app.listen(port);