import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../partials/button';

var content = [
 { paragraph: 'As a front end developer, I\'ve been lucky enough to work with a few excellent companies including Mediabrix, Small Earth Group, Ten Twenty Five, and KBS+. I have a dual background in Design and Advertising, so I understand the visual mechanics as well as the coding that brings web applications together.', id: "bio"},
  { paragraph: 'My core expertise in building applications comes from embracing both the print and the digital perspective, which enables me to create compelling designs as well as clean code. With that said, I am constantly looking to expand my skills by educating myself when it comes to the ever-changing industry and standards.', id: "expertise" },
  { paragraph: 'I currently claim residence in Manhattan and available for freelance work.', id: "freelance" },
];


export default class About extends Component {
  renderContent(){
    return content.map((data) => {
      return(
        <p key={data.id}>{data.paragraph}</p>
      );
    });
  }


  render(){
    return (
      <section id="about" className="container" role="main">
        <div>
          {this.renderContent()}
          <Button link="/resume" title="View Resume"/>
        </div>
      </section>
    )
  }
}
