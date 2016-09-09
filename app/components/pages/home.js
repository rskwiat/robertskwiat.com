import React, { Component } from 'react';

import Header from '../sections/header';
import Work from '../sections/work';
import About from '../sections/about';
import Contact from '../sections/contact';
import Footer from '../sections/footer';
import loader from '../../functions/loader';


export default class Home extends Component {
  componentDidMount(){
    loader();
  }

  render(){
    return (
      <div>
        <Header id="logo logo-robertskwiat" name="robert skwiat"/>
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    )
  }
}
