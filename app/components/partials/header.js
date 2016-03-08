import React, { Component} from 'react';

export default class Header extends Component {
  componentDidMount(){
    document.body.className = 'rendered'
  }
  render(){
    return (
        <header>
        {this.props.data}
          <div className="container">
            <div className="column column-12">
              <h1 id="logo">Robert Skwiat</h1>
            </div>
          </div>
        </header>
    )
  }
}
