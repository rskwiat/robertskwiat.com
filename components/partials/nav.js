var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Nav = React.createClass({

  render(){

    const data = this.props.data;
    const nav_items = data.menu;

    const menu_items = nav_items.map(( nav_item ) => {
      return (
        <li key={ 'key-' + nav_item.id }>
          <Link to={ '/' + nav_item.link }>{ nav_item.title }</Link>
        </li>
      )
    })

    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">title</Link></li>
        </ul>
      </div>
    )

  }

});

module.exports = Nav;
