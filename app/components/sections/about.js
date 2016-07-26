import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paragraph from '../partials/paragraph';
import Button from '../partials/button';

export default class About extends Component {

  render(){
    return (
      <section id="about" className="container">
        <div>
          <Paragraph copy="As a front end developer, I\'ve been lucky enough to work with a few excellent companies including Small Earth Group, Ten Twenty Five, Spies & Assassins and Mediabrix. I have a dual background in Design and Advertising, so I understand the visual mechanics as well as the coding that brings web applications together."/>
          <Paragraph copy="My core expertise in building applications comes from embracing both the print and the digital perspective, which enables me to create compelling designs as well as clean code. With that said, I am constantly looking to expand my skills by educating myself when it comes to the ever-changing industry and standards."/>
          <Paragraph copy="I currently claim residence in Manhattan, NY and available for freelance work." />
          <Button link="/resume" title="View Resume"/>
        </div>
      </section>
    )
  }
}
