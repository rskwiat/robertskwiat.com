import React, { Component } from 'react';
import Button from '../partials/button';
import loader from '../../functions/loader.js';

//Resume Partials
import Career from '../partials/resume/career.js';
import Expertise from '../partials/resume/expertise.js';
import Experience from '../partials/resume/experience.js';
import Education from '../partials/resume/education.js';

export default class Resume extends Component {

  componentDidMount(){
    loader();
  }

  render(){
    return (
      <div className="resume">
        <Career />
        <Expertise />
        <Experience />
        <Education />
        <Button link="/" title="Return Home" />
      </div>
    )
  }
}
