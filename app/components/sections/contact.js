import React, { Component } from 'react';

import Github from '../partials/icons/github';
import LinkedIn from '../partials/icons/in';
import Twitter from '../partials/icons/twitter';


export default class Contact extends Component {
    render(){
      return (
        <section id="contact" className="container">
          <div className="inner">
            <h3>Contact and Questions</h3>
            <p><a href="mailto:rob@robertskwiat.com?subject=Freelance Inquiry - [rob@robertskwiat.com contact form]" className="btn btn-inverse">rob@robertskwiat.com</a></p>
              <Twitter height="50px" width="50px" fill="#3D3A3B" link="https://twitter.com/robertskwiat" />
              <LinkedIn height="50px" width="50px" fill="#3D3A3B" link="https://www.linkedin.com/in/robertskwiat"/>
              <Github height="50px" width="50px" fill="#3D3A3B" 
              link="https://www.github.com/rskwiat" />
          </div>
        </section>
      )
    }
}
