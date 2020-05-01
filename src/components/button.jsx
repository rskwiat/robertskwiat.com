import React from 'react';
import ButtonStyles from './styles/ButtonStyles';

const Button = ({ text, icon, link }) => {
  return (
    <ButtonStyles href={link}>
      <svg height="30" width="30">
        <use xlinkHref={`/images/icons.svg#${icon}`} />
      </svg>

      {text}
    </ButtonStyles>
  );
};

export default Button;
