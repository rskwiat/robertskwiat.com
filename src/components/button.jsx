import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.gray};
  border: 1px solid ${(props) => props.theme.gray};
  background: none;
  cursor: pointer;
  position: relative;
  padding: 1rem 1.6rem;
  text-align: center;
  width: 18rem;
  transition: all 0.3s;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.gray};
  }

  &:hover {
    color: #fff;
    fill: currentColor;
    &:after {
      width: 100%;
    }
  }
`;

const Button = ({ text, icon, link }) => {
  return (
    <StyledButton href={link}>
      <svg height="30" width="30">
        <use xlinkHref={`/images/icons.svg#${icon}`} />
      </svg>

      {text}
    </StyledButton>
  );
};

export default Button;
