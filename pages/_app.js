import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../styles/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
