import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BREAKPOINTS } from '../../config';
import Router from '../Router';

const theme = {
  breakpoints: BREAKPOINTS,
};

export default () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);
