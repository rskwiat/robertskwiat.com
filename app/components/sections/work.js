import React, { Component } from 'react';

import ProjectTile from '../partials/projectTile.js';
import contentWork from './content/work';


class Work extends Component {

  renderWork() {
    return contentWork.map((data) => {
      return (
        <ProjectTile key={data.num} classes={data.id} name={data.name} company={data.company} />
      );
    });
  }

  render() {
    return (
      <section id="work" className="container" role="complementary">
        {this.renderWork()}
      </section>
    );
  }
}

export { Work };
