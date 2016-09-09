import React, { Component } from 'react';

import contentExpertise from '../../../content/expertise';

export default class Expertise extends Component {

  renderExpertise(){
    return contentExpertise.map((data) => {
      return(
        <li key={data.key}>{data.copy}</li>
      );
    });
  }

  render(){
    return (
      <div>
        <h3>Areas of Expertise:</h3>
        <ul>
          {this.renderExpertise()}
        </ul>
      </div>
    )
  }
}
