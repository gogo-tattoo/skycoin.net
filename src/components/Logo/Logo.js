import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

const Logo = styled.img.attrs({
  src: logo,
  alt: 'Skycoin',
})`
  height: 2.125rem;
`;

export default (props) => (
  <Link to="/">
    <Logo {...props} />
  </Link>
);
