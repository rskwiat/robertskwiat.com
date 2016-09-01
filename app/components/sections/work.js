import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import ProjectTile from '../partials/projectTile.js'

const work = [
    {
      num: '101',
      name: 'Goods for Good Landing Page',
      company: 'Ten Twenty Five',
      id: "gallery-item gallery-item-gfg"
    },
    {
      num: '102',
      name: 'Ludens Website',
      company: 'KBS+ / Spies & Assassins',
      id: "gallery-item gallery-item-ludens"
    },
    {
      num: '103',
      name: 'Panera Summer Salad',
      company: 'Mediabrix',
      id: "gallery-item gallery-item-paneraSummerSalad"
    },
    {
      num: '104',
      name: 'Mediabrix Demo Builder',
      company: 'Mediabrix',
      id: "gallery-item gallery-item-adBuilder"
    }
  ]

export default class Work extends Component {

  renderWork(){
    return work.map((data) => {
      return(
        <ProjectTile key={data.num} classes={data.id} name={data.name} company={data.company} />
      );
    });
  }


  render(){
    return (
      <section id="work" className="container" role="complementary">
        {this.renderWork()}
      </section>
    )
  }
}
