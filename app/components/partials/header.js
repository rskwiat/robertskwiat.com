import React, { Component} from 'react';

export default class Header extends Component {
  render(){
    return (
        <header style={{ background: 'url(' + this.props.imgUrl + ') no-repeat' }}>
          <div className="container container-center">
            <div className="">
              <h1 id={this.props.id}>{this.props.name}</h1>
            </div>
          </div>
        </header>
    )
  }
}
