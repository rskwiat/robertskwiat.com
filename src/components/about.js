import React, { Component } from 'react';
import content from './content/about';
import Button from './layout/button';

class About extends Component {
  renderContent() {
    return content.map((contents) =>
      <p key={contents.key}>
        {contents.copy}
      </p>
    );
  }

  render() {
    return (
      <div className="about">
        {this.renderContent()}
        <Button link="resume" text="View Resume" />
      </div>
    );
  }
}

export default About;
