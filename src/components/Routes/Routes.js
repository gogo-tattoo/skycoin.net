import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';

const Routes = ({ match }) => {
  const prefix = match.path === '/' ? '/' : '/:locale/';

  return (
    <Switch>
      <Route path={`${prefix}`} exact component={Home} />
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
