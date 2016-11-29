import React, { Component } from 'react';

class Twitter extends Component {
  render(){
    return (
      <a href={this.props.link}>
        <svg height={this.props.height} width={this.props.width} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75"><g id="layer1"><path fill={this.props.fill} id="path3611" d="M25,64.59c25.19,0,39-20.87,39-39q0-.89,0-1.77a27.85,27.85,0,0,0,6.83-7.09,27.31,27.31,0,0,1-7.86,2.16,13.74,13.74,0,0,0,6-7.57,27.46,27.46,0,0,1-8.7,3.32A13.71,13.71,0,0,0,36.87,27.16,38.88,38.88,0,0,1,8.65,12.85a13.71,13.71,0,0,0,4.24,18.28,13.59,13.59,0,0,1-6.2-1.71c0,0.06,0,.11,0,0.17A13.7,13.7,0,0,0,17.67,43a13.67,13.67,0,0,1-6.19.23,13.71,13.71,0,0,0,12.79,9.51,27.47,27.47,0,0,1-17,5.86A27.82,27.82,0,0,1,4,58.44a38.77,38.77,0,0,0,21,6.15"/></g></svg>
      </a>
    )
  }
}

export { Twitter };
