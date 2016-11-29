import React, { Component } from 'react';
import { Header, Work, About, Contact, Footer } from '../sections';
import loader from '../../functions/loader';

export default class Home extends Component {

  componentDidMount() {
    loader();
  }

  render() {
    return (
      <div>
        <Header id="logo logo-robertskwiat" name="robert skwiat" />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}
