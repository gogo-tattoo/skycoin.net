import React from 'react';
import flatten from 'flat';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import { BREAKPOINTS } from '../../config';
import en from '../../locales/en';
import Router from '../Router';

const theme = {
  breakpoints: BREAKPOINTS,
};

export default () => (
  <IntlProvider locale="en" messages={flatten(en)}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </IntlProvider>
);
