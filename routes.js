var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var React = require('react');

var AppStore = require('./stores/AppStore');
var App = require('./components/app');
// var Home = require('./components/pages/home');
// var About = require('./components/pages/about');
// var Work = require('./components/pages/work');
// var WorkDetail = require('./components/pages/work-detail');
// var Contact = require('./components/pages/contact');
// var NoMatch = require('./components/partials/nomatch');

var data = AppStore.data;


module.exports = (
    <Route path="/" component={App}>
      // <IndexRoute component={Home} data={data}/>
      // <Route path="about" component={About} data={data}/>
      // <Route path="work" component={Work}/>
      // <Route path="work/:detail" component={WorkDetail} data={data}/>
      // <Route path="contact" component={Contact}/>
      // <Route path="*" component={NoMatch}/>
    </Route>
)
