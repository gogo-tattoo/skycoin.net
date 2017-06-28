import styled from 'styled-components';
import { rem } from 'polished';
import { space, width, fontSize, color } from 'styled-system';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

import media from 'utils/media';
import { FONT_FAMILIES } from 'config';

const Text = createComponentFromTagProp({
  tag: 'p',
  prop: 'as',
});

export default styled(Text)`
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
