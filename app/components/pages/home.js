import React, { Component } from 'react';
import { Header, Work, About, Contact, Footer } from '../sections';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Header items="logo logo-robertskwiat" name="robert skwiat" />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}
