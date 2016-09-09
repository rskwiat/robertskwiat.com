import React, { Component } from 'react';
import smallearth from '../../../../content/smallearth';

export default class SmallEarth extends Component {

  renderSmallEarth(){
    return smallearth.map((data) =>{
      return(
        <li key={data.key}>{data.copy}</li>
      );
    });
  }

  render(){
    return(
      <div>
        <p>Small Earth Group ­/ <strong>August 2010 ­- January 2014</strong></p>
        <p><em>Freelance Senior Frontend Developer / DevOps</em></p>
        <ul>
          {this.renderSmallEarth()}
        </ul>
      </div>
    )
  }
}
