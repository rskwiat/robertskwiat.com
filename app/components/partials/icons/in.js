import React, { Component } from 'react';

class LinkedIn extends Component {
  render(){
    return (
      <a href={this.props.link} className="icon-middle">
        <svg height={this.props.height} width={this.props.width} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75"><g id="layer1"><g id="g3019"><path id="path14" fill={this.props.fill} d="M6.38,11.22A4.53,4.53,0,0,1,11,6.75H63.79a4.53,4.53,0,0,1,4.58,4.47V64.67a4.53,4.53,0,0,1-4.58,4.47H11a4.53,4.53,0,0,1-4.58-4.47V11.22Z"/><path id="path28" className="cls-1" fill="#fff" d="M25.17,59V30.8H15.8V59h9.36ZM20.49,27c3.27,0,5.3-2.16,5.3-4.87a4.87,4.87,0,0,0-5.24-4.87c-3.2,0-5.3,2.1-5.3,4.87A4.85,4.85,0,0,0,20.43,27h0.06Z"/><path id="path30" className="cls-1" fill="#fff" d="M30.35,59h9.36V43.24A6.42,6.42,0,0,1,40,41a5.13,5.13,0,0,1,4.8-3.42c3.39,0,4.74,2.58,4.74,6.37V59h9.36V42.82c0-8.65-4.62-12.68-10.78-12.68a9.33,9.33,0,0,0-8.5,4.75h0.06V30.8H30.35c0.12,2.64,0,28.17,0,28.17h0Z"/></g></g></svg>
      </a>
    )
  }
}

export { LinkedIn };
