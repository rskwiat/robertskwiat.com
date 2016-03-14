import React, { Component } from 'react';


export default class NavButton extends Component {
  render(){
    return (
      <a href="#" className="menu-toggle" id="toggle" onClick={this.props.event}>
        <s className="bar"></s>
        <s className="bar"></s>
        <s className="bar"></s>
      </a>
    )
  }
}
