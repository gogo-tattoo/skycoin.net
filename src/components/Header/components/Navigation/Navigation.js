import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import Hide from 'hidden-styled';

import { SPACE, FONT_SIZES, FONT_FAMILIES } from 'config';
import Link from 'components/Link';
import Buy from 'components/Buy';
import media from 'utils/media';

const Navigation = styled.div`
  font-size: ${rem(FONT_SIZES[1])};
  padding-top: ${rem(SPACE[4])};
  text-align: left;

  ${media.sm.css`
    font-size: ${rem(FONT_SIZES[3])};
    padding-top: 0;
    text-align: right;
  `}
`;

const StyledLink = styled(Link)`
  margin-right: ${rem(SPACE[5])};
  font-family: ${FONT_FAMILIES.mono};
  color: white;
  text-decoration: none;
  font-weight: 700;

  ${media.sm.css`
    margin-right: 0;
    margin-left: ${rem(SPACE[7])};
  `}

  ${media.md.css`
    margin-left: 0;
    margin-right: ${rem(SPACE[7])};
  `}
`;

const InlineHide = Hide.extend`
  display: inline;
`;

export default () => (
  <Navigation>
    <StyledLink href="/distribution">
      <FormattedMessage id="header.navigation.distribution" />
    </StyledLink>

    <StyledLink href="/downloads.html">
      <FormattedMessage id="header.navigation.downloads" />
    </StyledLink>

    <StyledLink href="http://skycoin.net/blog/index.html">
      <FormattedMessage id="header.navigation.blog" />
    </StyledLink>

    <InlineHide xs sm>
      <Buy color="white" pill outlined>
        <FormattedMessage id="header.navigation.buy" />
      </Buy>
    </InlineHide>
  </Navigation>
);
