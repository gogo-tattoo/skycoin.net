import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from 'polished';

import logo from './logo.svg';

const Logo = styled.img.attrs({
  src: logo,
  alt: 'Skycoin',
})`
  height: ${rem(34)};
`;

export default (props) => (
  <Link to="/">
    <Logo {...props} />
  </Link>
);
