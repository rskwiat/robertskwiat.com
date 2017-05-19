import React from 'react';

const Twitter = ({ link, height, width, color }) => (
  <a className="icon" href={`https://Twitter.com/${link}`} target="_blank" rel="noopener noreferrer">
    <svg
      height={height}
      width={width}
      viewBox="0 0 75 75"
    >
      <g>
	    	<path fill={color} d="M25,64.59c25.19,0,39-20.87,39-39q0-.89,0-1.77a27.85,27.85,0,0,0,6.83-7.09,27.31,27.31,0,0,1-7.86,2.16,13.74,13.74,0,0,0,6-7.57,27.46,27.46,0,0,1-8.7,3.32A13.71,13.71,0,0,0,36.87,27.16,38.88,38.88,0,0,1,8.65,12.85a13.71,13.71,0,0,0,4.24,18.28,13.59,13.59,0,0,1-6.2-1.71c0,0.06,0,.11,0,0.17A13.7,13.7,0,0,0,17.67,43a13.67,13.67,0,0,1-6.19.23,13.71,13.71,0,0,0,12.79,9.51,27.47,27.47,0,0,1-17,5.86A27.82,27.82,0,0,1,4,58.44a38.77,38.77,0,0,0,21,6.15"/>
      </g>
    </svg>
  </a>
);

Twitter.defaultProps = {
  height: '100px',
  width: '100px',
  color: '#000',
  link: '#'
};

Twitter.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  color: React.PropTypes.string,
  link: React.PropTypes.string
};

export default Twitter;
