import React, { Component } from 'react';
import Button from '../partials/button';
import contentAbout from './content/about';

class About extends Component {

  renderContent() {
    return contentAbout.map((data) => {
      return (
        <p key={data.key}>{data.copy}</p>
      );
    });
  }

  render() {
    return (
      <section id="about" className="container container-about" role="main">
        <div>
          {this.renderContent()}
          <Button link="/resume" title="View Resume" />
        </div>
      </section>
    );
  }
}

export { About };
