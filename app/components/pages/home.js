import React, { Component } from 'react';

import Header from '../sections/header';
import Work from '../sections/work';
import About from '../sections/about';
import Contact from '../sections/contact';
import Footer from '../sections/footer';


export default class Home extends Component {

  componentDidMount(){
    var app = document.getElementById('app');
    app.classList.add('loaded');
  }

  render(){
    return (
      <div>
        <Header id="logo" name="robert skwiat"/>
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    )
  }
}
