import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home';
import Downloads from '../Downloads';
import NotFound from '../NotFound';

const Routes = ({ match }) => {
  const prefix = match.path === '/' ? '/' : '/:locale/';

  return (
    <Switch>
      <Route path={`${prefix}`} exact component={Home} />
      <Route path={`${prefix}downloads`} exact component={Downloads} />
      <Redirect from={`${prefix}whitepapers.html`} to={`${prefix}downloads#whitepapers`} />
      <Redirect from={`${prefix}infographics.html`} to={`${prefix}downloads#infographics`} />
      <Redirect from={`${prefix}downloads.html`} to={`${prefix}downloads`} />
      <Redirect from={`${prefix}faq.html`} to={`${prefix}`} />
      <Route path={`${prefix}*`} component={NotFound} />
    </Switch>
  );
};

Routes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Routes;
