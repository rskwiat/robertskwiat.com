import React, { Component } from 'react';
import { Career, Expertise, Experience, Education } from '../resume';

class Resume extends Component {

  render() {
    return (
      <div className="resume" role="document">
        <Career />
        <Expertise />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default Resume;
