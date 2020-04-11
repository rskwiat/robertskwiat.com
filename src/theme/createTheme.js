import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme/theme';
import GlobalStyle from 'theme/createGlobalStyle';

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
