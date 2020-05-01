import React from 'react';
import FooterStyles from './styles/FooterStyles';

const Footer = ({ text }) => {
  return (
    <FooterStyles>
      <div className="container">
        <p>{text}</p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
