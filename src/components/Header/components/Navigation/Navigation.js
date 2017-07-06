import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import Hide from 'hidden-styled';

import { SPACE, FONT_SIZES, FONT_FAMILIES, COLORS } from 'config';
import Link from 'components/Link';
import Buy from 'components/Buy';
import media from 'utils/media';

const Wrapper = styled.div`
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
  color: ${props => (props.white ? 'white' : COLORS.black)};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }

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

const Navigation = ({ white }) => (
  <Wrapper>
    <StyledLink white={white} to="downloads#whitepapers">
      <FormattedMessage id="header.navigation.whitepapers" />
    </StyledLink>

    <StyledLink white={white} to="downloads">
      <FormattedMessage id="header.navigation.downloads" />
    </StyledLink>

    <StyledLink white={white} href="http://explorer.skycoin.net/blocks">
      <FormattedMessage id="header.navigation.explorer" />
    </StyledLink>

    <InlineHide xs sm>
      <Buy color={white ? 'white' : 'base'} pill outlined>
        <FormattedMessage id="header.navigation.buy" />
      </Buy>
    </InlineHide>
  </Wrapper>
);

Navigation.propTypes = {
  white: PropTypes.bool,
};

Navigation.defaultProps = {
  white: false,
};

export default Navigation;
