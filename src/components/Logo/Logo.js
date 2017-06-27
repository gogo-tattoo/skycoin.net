import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from 'polished';

import logo from './logo.svg';
import logoWhite from './logoWhite.svg';

const StyledLink = styled(Link)`
  display: block;
`;

const Logo = styled.img.attrs({
  alt: 'Skycoin',
})`
  display: block;
  height: ${rem(34)};
  max-width: 100%;
`;

export default (props) => (
  <StyledLink to="/">
    <Logo {...props} src={props.white ? logoWhite : logo}/>
  </StyledLink>
);
