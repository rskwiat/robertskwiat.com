import React, { Component } from 'react';

import Header from '../partials/header';

export default class Home extends Component{
  render(){

    const data = this.props.data;
    const about = data.about;

    const about_items = about.map(( about_item ) => {
      return (
        <p key={ 'key-' + about_item.content }>
        { about_item.content }
        </p>
      )
    })

    return(
      <div>
        <Header headline="Hello" subhead="ole" />
        <h2>Home Page</h2>
        <div>Some Home Page Content</div>

          { about_items }


      </div>
    )
  }
}
