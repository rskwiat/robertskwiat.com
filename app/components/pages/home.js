import React, { Component } from 'react';

import Header from '../partials/header';

import About from '../sections/about';
import Contact from '../sections/contact';
import Footer from '../sections/footer';


export default class Home extends Component {
  render(){
    return (
      <div>
        
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }
}
