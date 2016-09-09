import React, { Component } from 'react';
import seniorKBS from '../../../../content/seniorKBS';
import kbsdev from '../../../../content/kbsdev';

export default class KBS extends Component {

  renderKBSSeniorDev(){
    return seniorKBS.map((data) =>{
      return(
        <li key={data.key}>{data.copy}</li>
      );
    });
  }

  renderKBS(){
    return kbsdev.map((data) =>{
      return(
        <li key={data.key}>{data.copy}</li>
      );
    });
  }

  render(){
    return(
      <div>
      <p>Spies &amp; Assassins ­/ <strong>October 2011 ­- July 2015</strong></p>
      <p><em>Senior User Interface Developer (February 2014 ­- July 2015)</em></p>
      <ul>
        {this.renderKBSSeniorDev()}
      </ul>

      <p><em>User Interface Developer (October 2011 - February 2014)</em></p>
      <ul>
        {this.renderKBS()}
      </ul>
      </div>
    )
  }

}
