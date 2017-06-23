import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Buy from '../Buy';

const Navigation = styled.div`
  text-align: right;
  font-size: 15px;

  ${'' /* TODO: refactor */}
  &, a, button {
    color: white;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 1.5rem;
`

export default () => (
  <Navigation>
    <StyledLink to="/">
      <FormattedMessage id="navigation.distribution" />
    </StyledLink>
    <StyledLink to="/">
      <FormattedMessage id="navigation.how_it_works" />
    </StyledLink>
    <StyledLink to="/">
      <FormattedMessage id="navigation.blog" />
    </StyledLink>
    <Buy />
  </Navigation>
);
