import React from 'react';
import PropTypes from 'prop-types';

export const Github = ({ height, width, color, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <svg
      height={height}
      width={width}
      viewBox="0 0 75 75"
    >
      <path
        fill={color}
        d="M37.5,8.33a30.37,30.37,0,0,0-9.6,59.18A1.53,1.53,0,0,0,30,66c0-.72,0-3.12,0-5.65-8.45,1.84-10.23-3.58-10.23-3.58-1.38-3.51-3.37-4.44-3.37-4.44-2.76-1.88.21-1.85,0.21-1.85a6.38,6.38,0,0,1,4.65,3.13C23.9,58.29,28.3,57,30,56.18A6.47,6.47,0,0,1,32,52.12c-6.74-.77-13.83-3.37-13.83-15A11.75,11.75,0,0,1,21.25,29a10.91,10.91,0,0,1,.29-8S24.1,20.11,29.9,24a28.79,28.79,0,0,1,15.21,0c5.8-3.93,8.34-3.11,8.34-3.11a10.9,10.9,0,0,1,.3,8,11.73,11.73,0,0,1,3.12,8.15c0,11.66-7.1,14.23-13.86,15,1.09,0.94,2.06,2.79,2.06,5.62,0,4.06,0,7.33,0,8.33,0,0.81.55,1.76,2.09,1.46A30.37,30.37,0,0,0,37.5,8.33Z"
      />
      <path d="M18.64,51.93a0.46,0.46,0,1,1-.27-0.46,0.38,0.38,0,0,1,.27.46h0Zm-0.37-.28" />
      <path d="M19.87,53.3a0.56,0.56,0,0,1-.71-0.77,0.47,0.47,0,0,1,.62.14,0.46,0.46,0,0,1,.09.63h0ZM19.58,53" />
      <path d="M21.06,55a0.54,0.54,0,0,1-.68-0.26,0.53,0.53,0,0,1,0-.72,0.64,0.64,0,0,1,.67,1h0Zm0,0" />
      <path d="M22.7,56.74a0.57,0.57,0,0,1-.78-0.12A0.48,0.48,0,1,1,22.54,56a0.57,0.57,0,0,1,.17.78h0Zm0,0" />
      <path d="M25,57.72a0.7,0.7,0,0,1-1.26-.38,0.7,0.7,0,0,1,1.26.38h0Zm0,0" />
      <path d="M27.45,57.9a0.7,0.7,0,0,1-1.31,0,0.58,0.58,0,0,1,.65-0.46,0.58,0.58,0,0,1,.66.44h0Zm0,0" />
      <path d="M29.76,57.51A0.7,0.7,0,1,1,29,57.17a0.59,0.59,0,0,1,.73.33h0Zm0,0" />
    </svg>
  </a>
);

Github.defaultProps = {
  height: '100px',
  width: '100px',
  color: '#000',
  link: '#'
};

Github.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
};

export const LinkedIn = ({ height, width, color, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <svg
      height={height}
      width={width}
      viewBox="0 0 75 75"
    >
        <g>
        <path fill={color} d="M6.38,11.22A4.53,4.53,0,0,1,11,6.75H63.79a4.53,4.53,0,0,1,4.58,4.47V64.67a4.53,4.53,0,0,1-4.58,4.47H11a4.53,4.53,0,0,1-4.58-4.47V11.22Z"/>
        <path fill="#fff" d="M25.17,59V30.8H15.8V59h9.36ZM20.49,27c3.27,0,5.3-2.16,5.3-4.87a4.87,4.87,0,0,0-5.24-4.87c-3.2,0-5.3,2.1-5.3,4.87A4.85,4.85,0,0,0,20.43,27h0.06Z"/>
        <path fill="#fff" d="M30.35,59h9.36V43.24A6.42,6.42,0,0,1,40,41a5.13,5.13,0,0,1,4.8-3.42c3.39,0,4.74,2.58,4.74,6.37V59h9.36V42.82c0-8.65-4.62-12.68-10.78-12.68a9.33,9.33,0,0,0-8.5,4.75h0.06V30.8H30.35c0.12,2.64,0,28.17,0,28.17h0Z"/>
       </g>
    </svg>
  </a>
);

LinkedIn.defaultProps = {
  height: '100px',
  width: '100px',
  color: '#000',
  link: '#'
};

LinkedIn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string
};

export const Email = ({ height, width, color, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <svg
      height={height}
      width={width} 
      viewBox="0 0 14 14"
    >
      <g fill={color}>
        <path d="M7 9L5.268 7.484.316 11.729c.18.167.423.271.691.271h11.986c.267 0 .509-.104.688-.271L8.732 7.484 7 9z"/>
        <path d="M13.684 2.271A1.007 1.007 0 0 0 12.993 2H1.007c-.267 0-.509.104-.689.273L7 8l6.684-5.729zM0 2.878v8.308l4.833-4.107zM9.167 7.079L14 11.186V2.875z"/>
      </g>
    </svg>
  </a>
);

Email.defaultProps = {
  height: '100px',
  width: '100px',
  color: '#000',
}

Email.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
}
