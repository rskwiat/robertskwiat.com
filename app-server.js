// server.js

import express from 'express';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Router, match, RouterContext } from 'react-router';
import Location from 'history/lib/createLocation';
import routes from './app/routes';

const app = express();
const port = 4444;

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');


app.get('*', function(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    var content = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>);


    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render('index.ejs', {html: content});
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
