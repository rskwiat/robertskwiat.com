import React, { Component } from 'react';

export default class Mediabrix extends Component {

  renderMediabrix(){
    return mediabrix.map((data) => {
      return(
        <li key={data.key}>{data.copy}</li>
      );
    });
  }

  render(){
    return (
      <div>
        <p>Mediabrix: July 2015 ­- Present ­</p>
        <p><em>Digital Developer</em></p>
        <ul>
          {this.renderMediabrix()}
        </ul>
      </div>
    )
  }

}
