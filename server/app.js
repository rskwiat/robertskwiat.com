const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.resolve(__dirname, '../public', 'robots.txt'));
});

app.get('/humans.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.resolve(__dirname, '../public', 'humans.txt'));
});

app.get('*', (request, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

module.exports = app;
