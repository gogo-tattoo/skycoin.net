import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom';
import { resolve } from 'path';

import Home from '../Home';
import Distribution from '../Distribution';

export default ({ match }) => (
  <Switch>
    <Route path={match.url} exact component={Home} />
    <Route path={resolve(match.url, 'distribution')} exact component={Distribution} />
  </Switch>
);
