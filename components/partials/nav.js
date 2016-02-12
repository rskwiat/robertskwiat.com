import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {


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
          { menu_items }
        </ul>
      </div>
    )

  }

}
