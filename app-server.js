var react = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var hogan = require('hogan-express');

var Router = require('react-router');

var match = Router.match;
var RoutingContext = Router.RoutingContext;
require("node-jsx").install();


var routes = require('./routes');
// import routes from './routes';

const app = express();
app.engine('html', hogan);
app.set('views', __dirname + '/views');
app.use('/', express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 3000));

app.get('*', function(req, res){
  console.log(res);
});

// app.get('*', (req,res) => {
//     match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
//
//     const reactMarkup = ReactDOMServer.renderToStaticMarkup(<RoutingContext {...renderProps}/>)
//     res.locals.reactMarkup = reactMarkup
//
//     if(error){
//       res.status(500).send(error.message)
//     } else if (redirectLocation){
//       res.redirectLocation(302, redirectLocation.pathname + redirectLocation.search)
//     } else if (renderProps) {
//       res.status(200).render('index.html')
//     } else{
//       res.status(404).render('index.html')
//     }
//   });
// });

app.listen(app.get('port'));
console.info('==> Server is listening in production mode')
console.info('==> Go to http://localhost:%s', app.get('port'))
