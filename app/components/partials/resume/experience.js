import React, { Component } from 'react';

import Mediabrix from './jobs/mediabrix';
import KBS from './jobs/kbs';
import SmallEarth from './jobs/smallearth';
import Kean from './jobs/kean';
import Efashion from './jobs/efashion';
import IconEyewear from './jobs/eyewear';

export default class Experience extends Component {

  render(){
    return (
      <div>
        <h4>Work Experience:</h4>
        <Mediabrix />
        <Kean />
        <KBS />
        <SmallEarth />
        <Efashion />
        <IconEyewear />
      </div>
    )
  }
}
