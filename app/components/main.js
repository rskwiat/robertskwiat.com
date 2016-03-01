import React, { Component } from 'react';

export class App extends Component {
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (
      <div>
        <h1>WIP</h1>
           <nav>
              <ul>
                <li>test</li>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/work">Work</Link></li>
                 <li><Link to="/contact">Contact</Link></li>
              </ul>
           </nav>
        { this.props.children }
      </div>
    )
  }
}
