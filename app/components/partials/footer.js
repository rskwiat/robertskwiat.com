import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import Icons from './icons';
import Copyright from './copyright';

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <div className="container">
          <Copyright />
          <div className="social-icons">
            <Icons icon="fa fa-linkedin-square" title="linkedin" link="http://www.linkedin.com/in/robertskwiat"/>
            <Icons icon="fa fa-twitter-square" title="twitter" link="http://twitter.com/RobertSkwiat"/>
            <Icons icon="fa fa-github-square" title="github" link="http://github.com/rskwiat"/>
          </div>
        </div>
      </footer>
    )
  }
}
