import React, { Component} from 'react';

export default class Header extends Component {
  render(){
    return (
        <header>
          <h1 id={this.props.id}>{this.props.name}</h1>
        </header>
    )
  }
}
