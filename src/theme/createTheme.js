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

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
