import React, { Component } from 'react';

import Icon from '../partials/icons';

export default class Contact extends Component {
    render(){
      return (
        <section id="contact" className="container">
          <div className="flex-item">
            <h3>Contact and Questions</h3>
            <p><a href="mailto:rob@robertskwiat.com?subject=Freelance Inquiry - [rob@robertskwiat.com contact form]" className="btn btn-inverse">rob@robertskwiat.com</a></p>
              <Icon link="http://github.com/rskwiat" title="Github" icon="fa fa-github icon" />
              <Icon link="http://twitter.com/RobertSkwiat" title="Twitter" icon="fa fa-twitter icon" />
              <Icon link="https://www.linkedin.com/in/robertskwiat" title="LinkedIn" icon="fa fa-linkedin icon" />
          </div>
        </section>
      )
    }
}
