import React from 'react';
import PropTypes from 'prop-types';
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
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};


export default Button;
