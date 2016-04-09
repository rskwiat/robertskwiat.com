import React, { Component } from 'react';

import Icon from '../partials/icons';

export default class Contact extends Component {
    render(){
      return (
        <section id="contact" className="container">
          <div>
            <h3>Contact and Questions</h3>
            <p><a href="#" className="btn btn-inverse">rob@robertskwiat.com</a></p>
              <Icon link="#" title="test" icon="fa fa-github icon" />
              <Icon link="#" title="test" icon="fa fa-twitter icon" />
              <Icon link="#" title="test" icon="fa fa-linkedin icon" />
          </div>
        </section>
      )
    }
}
