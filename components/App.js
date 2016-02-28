var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;


var Nav = require('./partials/nav');

var App = React.createClass({

  // Add change listeners to stores
  componentDidMount: function(){
    setTimeout(() => {
      document.body.classList.remove('hidden');
    }, 500);
  }

  render: function() {
    return(
      <div>
          <Nav />
      </div>
    )
  }

})

module.exports = App;
