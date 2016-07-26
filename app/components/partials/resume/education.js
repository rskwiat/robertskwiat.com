import React, { Component } from 'react';

export default class Education extends Component {
  render(){
    return (
      <div>
        <h3>Education:</h3>
        <p>BFA: Visual Communications / Advertising Design Kean University, Union, NJ Graduation May 2008</p>

        <h4>Technical Skills:</h4>
          <ul>
            <li>Mac OS, Windows, Git, SubVersion</li>
            <li>HTML5, CSS3, JavaScript, JQuery, Angular, React</li>
            <li>Jekyll, Grunt, Gulp, Wordpress, mySQL, nGinx, Python, Node, ExpressJS, Vagrant, OpenCart</li>
          </ul>

        <p className="hide-for-print">*Fun fact - this site is built in React &amp; Express!</p>
      </div>
    )
  }
}
