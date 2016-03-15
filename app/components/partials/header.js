import React, { Component} from 'react';

export default class Header extends Component {
  render(){
    return (
        <header style={{
            height: this.props.height + 'px',
            background: 'url(' + this.props.imgUrl + ') no-repeat' }}>
          <div className="container">
            <div className="column column-12">
              <h1 id={this.props.id}>{this.props.name}</h1>
            </div>
          </div>
        </header>
    )
  }
}
