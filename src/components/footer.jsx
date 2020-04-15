import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.gray};
  padding: 2rem 0;
  margin-top: 4rem;

  p {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const Footer = ({ text }) => {
  return (
    <StyledFooter>
      <div className="container">
        <p>{text}</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
