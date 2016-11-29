import React, { Component } from 'react';

export default class Kean extends Component {

  renderKeanU(){
    return KeanU.map((data) =>{
      return(
        <li key={data.key}>{data.copy}</li>
      );
    });
  }

  render(){
    return(
      <div>
        <p>Kean University / <strong>January 2012 - Present</strong></p>
          <ul>
            {this.renderKeanU()}
          </ul>
      </div>
    )

  }


}
