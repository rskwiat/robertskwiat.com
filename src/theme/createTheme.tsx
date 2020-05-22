import React from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';

import { theme } from 'theme/theme';
import GlobalStyle from 'theme/createGlobalStyle';

WebFont.load({
  google: {
    families: ['Open+Sans:400,600'],
  },
});

interface Props {
  children: object;
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
