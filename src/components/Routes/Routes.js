import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { resolve } from 'path';

import Home from '../Home';
import Distribution from '../Distribution';
import NotFound from '../NotFound';

const Routes = ({ match }) => (
  <Switch>
    <Route path={match.url} exact component={Home} />
    <Route path={resolve(match.url, 'distribution')} exact component={Distribution} />
    <Route path="*" component={NotFound} />
  </Switch>
);

Routes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Routes;
