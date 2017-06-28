import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from 'polished';

import logo from './logo.svg';
import logoWhite from './logoWhite.svg';

const StyledLink = styled(Link)`
  display: block;
`;

const Img = styled.img.attrs({
  alt: 'Skycoin',
})`
  display: block;
  height: ${rem(34)};
  max-width: 100%;
`;

const Logo = props => (
  <StyledLink to="/">
    <Img {...props} src={props.white ? logoWhite : logo} />
  </StyledLink>
);

Logo.propTypes = {
  white: PropTypes.bool,
};

Logo.defaultProps = {
  white: false,
};

export default Logo;
