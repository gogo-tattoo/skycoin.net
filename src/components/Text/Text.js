import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { space, width, fontSize, color } from 'styled-system';

import { FONT_FAMILIES } from 'config';

export default styled.p`
  ${fontSize}
  ${color}
  ${space}
  ${width}

  font-family: ${FONT_FAMILIES.sans};
  font-weight: ${props => props.heavy ? 500 : 300};
  line-height: ${rem(28)};
`;
