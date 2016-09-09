import React, { Component } from 'react';
import contentEFS from '../../../../content/efs';

export default class Efashion extends Component {

  renderEFS(){
    return contentEFS.map((data) =>{
      return(
        <li key={data.key}>{data.copy}</li>
      );
    });
  }

  render(){
    return(
      <div>
        <p>eFashion Solutions / <strong>March 2011 - September 2011</strong></p>
        <p><em>Frontend Developer</em></p>
        <ul>
          {this.renderEFS()}
        </ul>
      </div>
    )
  }


}
