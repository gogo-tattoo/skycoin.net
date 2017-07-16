import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home';
import Downloads from '../Downloads';
import Infographics from '../Infographics';
import Distribution from '../Distribution';
import NotFound from '../NotFound';

const Routes = ({ match }) => {
  const prefix = match.path === '/' ? '/' : '/:locale/';

  return (
    <Switch>
      <Route path={`${prefix}`} exact component={Home} />
      <Route path={`${prefix}downloads`} exact component={Downloads} />
      <Route path={`${prefix}infographics`} exact component={Infographics} />
      <Route path={`${prefix}distribution`} exact component={Distribution} />
      <Redirect from={`${prefix}whitepapers.html`} to={`${prefix}downloads#whitepapers`} />
      <Redirect from={`${prefix}infographics.html`} to={`${prefix}infographics`} />
      <Redirect from={`${prefix}downloads.html`} to={`${prefix}downloads`} />
      <Redirect from={`${prefix}faq.html`} to={`${prefix}`} />
      <Redirect from={`${prefix}index.html`} to={`${prefix}`} />
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
