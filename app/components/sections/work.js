import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import ProjectTile from '../partials/projectTile.js'

export default class Work extends Component {

  render(){
    return (
      <section id="work" className="container">
        <ProjectTile id="adBuilder" name="Mediabrix Demo Builder" company="Mediabrix" />
        <ProjectTile id="paneraSummerSalad" name="Panera Summer Salad" company="Mediabrix" />
        <ProjectTile id="gfg" name="Goods for Good Landing Page" company="Ten Twenty Five" />
        <ProjectTile id="ludens" name="Ludens Website" company="KBS+ / Spies & Assassins" />
      </section>
    )
  }
}

