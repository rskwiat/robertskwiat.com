import React, { Component } from 'react';

export default class Header extends Component {

  render(){
    return (
      <div>
        <header className="intro-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="site-heading">
                  <h1>{this.props.headline}</h1>
                  <hr className="small" />
                  <span className="subheading">{this.props.subhead}</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
