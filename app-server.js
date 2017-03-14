// server.js

import favicon from 'serve-favicon';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/routes/routes';

const app = express();
const port = 4500;

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    const content = ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />);
      res.render('index.ejs', { html: content });
  });
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile('public/robots.txt');
});

app.get('/humans.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile('public/humans.txt');
});

app.listen(port);
