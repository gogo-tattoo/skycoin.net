import styled from 'styled-components';
import { rem } from 'polished';
import { space, width, fontSize, color } from 'styled-system';

import media from 'utils/media';
import { FONT_FAMILIES } from 'config';

export default styled.p`
  ${fontSize}
  ${color}
  ${space}
  ${width}

  font-family: ${FONT_FAMILIES.sans};
  font-weight: ${props => (props.heavy ? 500 : 400)};
  line-height: ${rem(24)};

  ${media.sm.css`
    line-height: ${rem(28)};
  `}

  a {
    color: inherit;
  }
`;
