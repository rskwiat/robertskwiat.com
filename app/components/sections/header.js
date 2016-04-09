import React, { Component} from 'react';

export default class Header extends Component {
  render(){
    return (
        <header>
          <div className="container">
            <div>
              <h1 id={this.props.id}>{this.props.name}</h1>
            </div>
          </div>
        </header>
    )
  }
}
