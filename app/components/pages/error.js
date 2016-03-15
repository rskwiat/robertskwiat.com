import React, { Component } from 'react';
import Header from '../partials/header';

export default class NoMatch extends Component {
  render(){
    return (
      <div>
        <Header imgUrl='' id='' name='404 Error'/>
        <h2>NoMatch</h2>
        <div>404 error</div>
      </div>
    )
  }
}
