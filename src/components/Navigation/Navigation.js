import React from 'react';
import { Link } from 'react-router-dom';

import Buy from '../Buy';

export default () => (
  <div>
    <Link to="/">Distribution</Link>
    <Link to="/">How it works</Link>
    <Link to="/">Blog</Link>
    <Buy />
  </div>
);
