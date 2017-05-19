import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, text }) => (
  <div className="btn">
    <Link to={link}>{text}</Link>
  </div>
);

Button.defaultProps = {
  link: '#',
  text: 'Button'
};

Button.propTypes = {
  link: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};


export default Button;
