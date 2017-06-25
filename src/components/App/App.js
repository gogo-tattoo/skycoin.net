import React from 'react';
import flatten from 'flat';
import values from 'lodash/values';
import { ThemeProvider } from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { COLORS, BREAKPOINTS, SPACE, FONT_SIZES } from 'config';
import * as locales from 'locales';
import Routes from '../Routes';

addLocaleData([...zh]);

const theme = {
  colors: flatten(COLORS),
  breakpoints: values(BREAKPOINTS),
  space: SPACE,
  fontSizes: FONT_SIZES,
};

const Root = ({ locale, ...props }) => (
  <IntlProvider locale={locale} messages={flatten(locales[locale])}>
    <ThemeProvider theme={theme}>
      <Routes {...props} />
    </ThemeProvider>
  </IntlProvider>
);

export default () => (
  <Router>
    <Switch>
      <Route path="/cn" render={props => <Root {...props} locale="zh" />} />
      <Route path="/" render={props => <Root {...props} locale="en" />} />
    </Switch>
  </Router>
);
