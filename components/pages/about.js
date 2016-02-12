import React, { Component } from 'react';

export default class About extends Component{
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
        <h2>About Page </h2>
        <div>Some About Page Content</div>
        { about_items }
      </div>
    )
  }
}
