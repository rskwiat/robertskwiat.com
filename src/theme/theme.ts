import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  white: '#f8f8f8',
  gray: '#3d3a3b',
  bg: '#dfe6e9',
  highlight: 'rgb(233, 113, 23)',
  bodyFont: 'Open Sans, sans-serif',
};

const size = {
  small: '768px',
  medium: '1024px',
  large: '1440px',
};

export const device = {
  small: `(min-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
};
