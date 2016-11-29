import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <p>
        <a
          className="btn btn-inverse"
          role="button"
          href={this.props.link}
        >
          {this.props.title}
        </a>
       </p>
    );
  }
}

export default Button;
