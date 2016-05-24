import React, { Component } from 'react';

export default class Resume extends Component {

  componentDidMount(){
    var app = document.getElementById('app');
    app.classList.add('loaded');
  }

  render(){
    return (
      <div className="resume">
        <p>dis is my resume!</p>


        *Fun fact - this site is built in React &amp; Express!
      </div>
    )
  }
}
