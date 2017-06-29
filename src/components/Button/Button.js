import styled, { css } from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import { rem } from 'polished';

import Link from 'components/Link';
import media from 'utils/media';
import { FONT_FAMILIES, FONT_SIZES, SPACE, BORDER_RADIUS, BOX_SHADOWS } from 'config';

export default styled(Link)`
  display: inline-block;
  border: 1px solid transparent;
  cursor: pointer;
  line-height: 1;
  font-weight: 700;
  box-sizing: border-box;
  text-decoration: none;

  border-radius: ${props => (props.pill ? BORDER_RADIUS.pill : BORDER_RADIUS.base)};
  box-shadow: ${BOX_SHADOWS.base};
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[3])};
  padding: ${rem(SPACE[3])} ${rem(SPACE[6])};

  ${fontSize}
  ${color}
  ${space}
  ${width}

  ${props => props.outlined && css`
    border: 1px solid currentColor;
    box-shadow: none;
  `}

  ${props => props.big && media.sm.css`
    padding: ${rem(SPACE[4])} ${rem(SPACE[7])};
  `}
`;
