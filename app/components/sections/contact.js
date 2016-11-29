import React, { Component } from 'react';
import { Github, LinkedIn, Twitter } from '../partials/icons';

class Contact extends Component {
    render() {
      return (
        <section id="contact" className="container container-contact">
          <div className="inner">
            <h3>Contact and Questions</h3>
            <p>
              <a
                href="mailto:rob@robertskwiat.com?subject=Freelance Inquiry [rob@robertskwiat.com]"
                className="btn btn-inverse"
              >
                rob@robertskwiat.com
              </a>
            </p>
            <Twitter
              height="50px"
              width="50px"
              fill="#3D3A3B"
              link="https://twitter.com/robertskwiat"
            />
            <LinkedIn
              height="50px"
              width="50px"
              fill="#3D3A3B"
              link="https://www.linkedin.com/in/robertskwiat"
            />
            <Github
              height="50px"
              width="50px"
              fill="#3D3A3B"
              link="https://www.github.com/rskwiat"
            />
          </div>
        </section>
      );
    }
}

export { Contact };
